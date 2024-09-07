import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { logout } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import StatusCodes from "../../utils/StatusCodes";
import { logoutSuccess } from "../../redux/reducer/userSlice";
import { toast } from "react-toastify";
import Avatar from "../avatar/Avatar";
import { auth, signOut } from "../../utils/firebase";
import Search from "../search/Search";

const RightNavBar = ({ handleCloseSearch, setVisible }) => {
  const { t } = useTranslation();

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
          <Search />
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
  );
};

export default RightNavBar;
