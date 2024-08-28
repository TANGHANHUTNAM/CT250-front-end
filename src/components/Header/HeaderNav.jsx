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

const HeaderNav = () => {
  const { t } = useTranslation();
  const [visable, setVisible] = useState(false);
  const [visableSearch, setVisibleSearch] = useState(false);
  const handleCloseSearch = () => {
    setVisibleSearch((show) => !show);
  };

  const {
    isAuth,
    account: { id, email },
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logout({ id: id, email: email });

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
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
      <div className="relative max-w-screen-xl mx-auto w-full flex items-center justify-between p-3">
        {/* Logo */}
        <div>
          <NavLink
            to="/"
            className="w-[120px] h-[60px] flex items-center justify-between sm:w-[130px] lg:w-[140px]"
          >
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        {/* Menu */}
        <ul className="hidden md:flex lg:gap-6 font-semibold text-[15px] text-primary gap-2">
          <NavLink
            to="/"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            {t("Header.Navbar.home")}
          </NavLink>
          <NavLink
            to="/introduce"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            {t("Header.Navbar.introduce")}
          </NavLink>
          <NavLink
            to="/dish"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            {t("Header.Navbar.menu")}
          </NavLink>
          <NavLink
            to="/best-dish"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            {t("Header.Navbar.bestDish")}
          </NavLink>
          <NavLink
            to="/delicious-dish"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            {t("Header.Navbar.deliciousDish")}
          </NavLink>
          <NavLink
            to="/news"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            {t("Header.Navbar.news")}
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
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
              <IoIosSearch className="text-3xl text-primary cursor-pointer hover:text-tertiary duration-500" />
            </span>
            <div className="hidden sm:block absolute dropdown-menu right-0 pt-4 transition-all duration-300 will-change-transform scale-90 opacity-0 sm:invisible sm:group-hover:visible sm:group-hover:scale-100 sm:group-hover:opacity-100">
              <div className="flex flex-col gap-3 w-96 p-4 bg-primary rounded-md">
                <p className="text-md text-secondar font-medium">
                  {t("Header.Navbar.search")}
                </p>
                <hr />
                <form className="w-full relative">
                  {/* Input search */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder={t("Header.Navbar.inputSearch")}
                      className="w-full border rounded-md border-tertiary placeholder:text-secondary px-2 py-2.5 text-sm outline-none"
                    />
                    <button className="absolute right-1.5 top-1/2 -translate-y-1/2 text-tertiary text-[26px]">
                      <IoIosSearch />
                    </button>
                  </div>
                  <hr />
                  {/* Result search */}
                  <div className="mt-3 p-3 flex flex-col gap-3 w-full bg-zinc-100 rounded-lg">
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
            <BsCart3 className="text-2xl text-primary cursor-pointer" />
            <p className="absolute flex justify-center items-center rounded-full bg-tertiary text-primary aspect-square w-[20px] h-[20px] text-[10px] -top-2 -right-2.5">
              99+
            </p>
          </Link>
          <div className="group relative">
            {/* User-icons */}
            <span>
              <FaRegUser className="text-2xl text-primary cursor-pointer hover:text-tertiary duration-500" />
            </span>
            <div className="absolute dropdown-menu right-0 pt-4 cursor-pointer transition-all duration-300 will-change-transform scale-90 opacity-0 invisible group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              <div className="flex flex-col gap-3 w-60 p-3 bg-primary rounded-md">
                <Link
                  hidden={isAuth}
                  to="/login"
                  className="bg-tertiary p-2.5 rounded-md text-center text-sm font-medium text-primary hover:bg-yellow-600 duration-500"
                >
                  {t("Header.Navbar.login")}
                  <span hidden>{t("Header.Navbar.logout")}</span>
                </Link>
                <Link
                  hidden={isAuth}
                  to="/register"
                  className="bg-tertiary p-2.5 rounded-md text-center text-sm font-medium text-primary hover:bg-yellow-600 duration-500"
                >
                  {t("Header.Navbar.register")}
                </Link>
                <Link
                  to={`/favorite-dish/${12}`}
                  className="bg-tertiary p-2.5 rounded-md text-center text-sm font-medium text-primary hover:bg-yellow-600 duration-500"
                >
                  {t("Header.Navbar.favoriteDish")}
                </Link>
                <button
                  hidden={!isAuth}
                  className="bg-tertiary p-2.5 rounded-md text-center text-sm font-medium text-primary hover:bg-yellow-600 duration-500"
                  onClick={() => handleLogout()}
                >
                  {t("Header.Navbar.logout")}
                </button>
              </div>
            </div>
          </div>
          {/* Booking */}
          <Link className="hidden booking-table md:flex" to="/booking">
            <button className="bg-tertiary text-primary text-sm rounded-md font-bold hover:bg-yellow-600 duration-500 py-2.5 px-2 lg:px-4">
              {t("Header.Navbar.booking")}
            </button>
          </Link>
          {/* Menu-icons */}
          <span
            onClick={() => {
              setVisible(true);
            }}
            className="cursor-pointer text-[36px] text-primary md:hidden duration-500 hover:text-tertiary"
          >
            <CgMenuRightAlt />
          </span>
        </div>
      </div>

      {/* Search for screen small */}
      {visableSearch ? (
        <div className="p-2 bg-bgPrimary sm:hidden w-full">
          <form className="">
            {/* Input search */}
            <div className="relative ">
              <input
                type="text"
                placeholder={t("Header.Navbar.inputSearch")}
                className="w-full border rounded-md border-tertiary placeholder:text-secondary p-2 text-sm outline-none "
              />
              <button className="absolute right-1 top-1 text-tertiary text-3xl">
                <IoIosSearch />
              </button>
              {/* Result search */}
              <div className="absolute p-2 flex flex-col gap-3 bg-white rounded w-full">
                <h2 className="text-md text-secondar font-normal mt-2">
                  {t("Header.Navbar.resultSearch")}
                </h2>
                <div className="flex flex-col justify-center gap-3 ">
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
