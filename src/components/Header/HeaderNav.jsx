import logo from "../../assets/logo.png";
import "./HeaderNav.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";
import SideBar from "./SideBar";
import { useTranslation, Trans } from "react-i18next";
import { logout } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import StatusCodes from "../../utils/StatusCodes";
import { logoutSuccess } from "../../redux/reducer/userSlice";
import { toast } from "react-toastify";
import Avatar from "../avatar/Avatar";
import { auth, signOut } from "../../utils/firebase";

const HeaderNav = () => {
  const { t } = useTranslation();
  const [visable, setVisible] = useState(false);
  const [visableSearch, setVisibleSearch] = useState(false);
  const handleCloseSearch = () => {
    setVisibleSearch((show) => !show);
  };

  const {
    isAuth,
    account: { id, email, avatar },
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logout({ id: id, email: email });

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      await signOut(auth);
      toast.success(res.EM);
      dispatch(logoutSuccess());
      navigate("/login");
    }

    if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
      toast.error(res.EM);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="relative z-50 mx-auto flex w-full max-w-screen-xl items-center justify-between p-3">
        {/* Logo */}
        <div>
          <NavLink
            to="/"
            className="flex h-[60px] w-[120px] items-center justify-between sm:w-[130px] lg:w-[140px]"
          >
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        {/* Menu */}
        <ul className="hidden gap-2 text-[15px] font-semibold text-primary md:flex lg:gap-6">
          <NavLink
            to="/"
            className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
          >
            {t("Header.Navbar.home")}
          </NavLink>
          <NavLink
            to="/introduce"
            className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
          >
            {t("Header.Navbar.introduce")}
          </NavLink>
          <NavLink
            to="/dish"
            className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
          >
            {t("Header.Navbar.menu")}
          </NavLink>
          <NavLink
            to="/best-dish"
            className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
          >
            {t("Header.Navbar.bestDish")}
          </NavLink>
          <NavLink
            to="/delicious-dish"
            className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
          >
            {t("Header.Navbar.deliciousDish")}
          </NavLink>
          <NavLink
            to="/news"
            className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
          >
            {t("Header.Navbar.news")}
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
          >
            {t("Header.Navbar.contact")}
          </NavLink>
        </ul>
        {/* Search Cart User */}
        <div className="flex items-center gap-2.5 lg:gap-4">
          {/* Search-icons */}
          <div className="group relative">
            <span
              onClick={() => {
                handleCloseSearch();
              }}
            >
              <IoIosSearch className="cursor-pointer text-3xl text-primary duration-500 hover:text-tertiary" />
            </span>
            <div className="dropdown-menu absolute right-0 hidden scale-90 pt-4 opacity-0 transition-all duration-300 will-change-transform sm:invisible sm:block sm:group-hover:visible sm:group-hover:scale-100 sm:group-hover:opacity-100">
              <div className="flex w-96 flex-col gap-3 rounded-md bg-primary p-4">
                <p className="text-md text-secondar font-medium">
                  {t("Header.Navbar.search")}
                </p>
                <hr />
                <form className="relative w-full">
                  {/* Input search */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder={t("Header.Navbar.inputSearch")}
                      className="w-full rounded-md border border-tertiary px-2 py-2.5 text-sm outline-none placeholder:text-secondary"
                    />
                    <button className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[26px] text-tertiary">
                      <IoIosSearch />
                    </button>
                  </div>
                  <hr />
                  {/* Result search */}
                  <div className="mt-3 flex w-full flex-col gap-3 rounded-lg bg-zinc-100 p-3">
                    <h2 className="text-md text-secondar font-normal">
                      {t("Header.Navbar.resultSearch")}
                    </h2>
                    <div className="flex flex-col justify-center gap-3">
                      <span>ABC</span>
                      <span>DBD</span>
                      <span>12</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Cart-icons */}
          <Link to="/cart/12" className="relative">
            <BsCart3 className="cursor-pointer text-2xl text-primary" />
            <p className="absolute -right-2.5 -top-2 flex aspect-square h-[20px] w-[20px] items-center justify-center rounded-full bg-tertiary text-[10px] text-primary">
              99+
            </p>
          </Link>
          <div className="group relative">
            {/* User-icons */}
            {isAuth ? (
              <Avatar src={avatar} />
            ) : (
              <span>
                <FaRegUser className="cursor-pointer text-2xl text-primary duration-500 hover:text-tertiary" />
              </span>
            )}
            <div className="dropdown-menu invisible absolute right-0 scale-90 cursor-pointer pt-4 opacity-0 transition-all duration-300 will-change-transform group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              <div className="flex w-60 flex-col gap-3 rounded-md bg-primary p-3">
                <Link
                  hidden={isAuth}
                  to="/login"
                  className="rounded-md bg-tertiary p-2.5 text-center text-sm font-medium text-primary duration-500 hover:bg-yellow-600"
                >
                  {t("Header.Navbar.login")}
                  <span hidden>{t("Header.Navbar.logout")}</span>
                </Link>
                <Link
                  hidden={isAuth}
                  to="/register"
                  className="rounded-md bg-tertiary p-2.5 text-center text-sm font-medium text-primary duration-500 hover:bg-yellow-600"
                >
                  {t("Header.Navbar.register")}
                </Link>
                <Link
                  hidden={!isAuth}
                  to="/personal/12"
                  className="rounded-md bg-tertiary p-2.5 text-center text-sm font-medium text-primary duration-500 hover:bg-yellow-600"
                >
                  {t("Header.Navbar.myAccount")}
                </Link>
                <Link
                  to={`/favorite-dish/${12}`}
                  className="rounded-md bg-tertiary p-2.5 text-center text-sm font-medium text-primary duration-500 hover:bg-yellow-600"
                >
                  {t("Header.Navbar.favoriteDish")}
                </Link>
                <button
                  hidden={!isAuth}
                  className="rounded-md bg-tertiary p-2.5 text-center text-sm font-medium text-primary duration-500 hover:bg-yellow-600"
                  onClick={() => handleLogout()}
                >
                  {t("Header.Navbar.logout")}
                </button>
              </div>
            </div>
          </div>
          {/* Booking */}
          <Link className="booking-table hidden md:flex" to="/booking">
            <button className="rounded-md bg-tertiary px-2 py-2.5 text-sm font-bold text-primary duration-500 hover:bg-yellow-600 lg:px-4">
              {t("Header.Navbar.booking")}
            </button>
          </Link>
          {/* Menu-icons */}
          <span
            onClick={() => {
              setVisible(true);
            }}
            className="cursor-pointer text-[36px] text-primary duration-500 hover:text-tertiary md:hidden"
          >
            <CgMenuRightAlt />
          </span>
        </div>
      </div>

      {/* Search for screen small */}
      {visableSearch ? (
        <div className="w-full bg-bgPrimary p-2 sm:hidden">
          <form className="">
            {/* Input search */}
            <div className="relative">
              <input
                type="text"
                placeholder={t("Header.Navbar.inputSearch")}
                className="w-full rounded-md border border-tertiary p-2 text-sm outline-none placeholder:text-secondary"
              />
              <button className="absolute right-1 top-1 text-3xl text-tertiary">
                <IoIosSearch />
              </button>
              {/* Result search */}
              <div className="absolute flex w-full flex-col gap-3 rounded bg-white p-2">
                <h2 className="text-md text-secondar mt-2 font-normal">
                  {t("Header.Navbar.resultSearch")}
                </h2>
                <div className="flex flex-col justify-center gap-3">
                  <span>ABC</span>
                  <span>DBD</span>
                  <span>12</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}

      {/* Sidebar menu for screen small*/}
      <SideBar visable={visable} setVisible={setVisible} />
    </>
  );
};

export default HeaderNav;
