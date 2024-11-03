import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Avatar from "../avatar/Avatar";
import { logout } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import StatusCodes from "../../utils/StatusCodes";
import { logoutSuccess } from "../../redux/reducer/userSlice";
import { toast } from "react-toastify";
import { auth, signOut } from "../../utils/firebase";
import { useTranslation } from "react-i18next";

const UserMenu = () => {
  const { t } = useTranslation();

  const {
    isAuth,
    account: { id, email, avatar, username },
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logout({ id: id, email: email });

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      await signOut(auth);
      toast.success("Đăng xuất thành công!");
      dispatch(logoutSuccess());
      navigate("/login");
    }

    if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
      toast.error(res.EM);
    }
  };

  return (
    <div className="group relative">
      {isAuth ? (
        <Avatar src={avatar} />
      ) : (
        <span>
          <FaRegUser className="cursor-pointer text-2xl text-primary duration-500 hover:text-tertiary" />
        </span>
      )}
      <div className="dropdown-menu invisible absolute right-0 scale-90 pt-4 opacity-0 transition-all duration-300 will-change-transform group-hover:visible group-hover:scale-100 group-hover:opacity-100">
        {isAuth ? (
          <div className="min-w-48 divide-y divide-solid divide-gray-300 rounded-md bg-primary text-sm text-black">
            <div className="space-y-0.5 px-3.5 py-2">
              <p className="font-bold">{username}</p>
              <p className="text-xs font-medium">{email}</p>
            </div>
            <ul className="py-2">
              <li>
                <Link
                  className="block px-3.5 py-2 transition-all duration-300 hover:bg-tertiary hover:ps-5 hover:text-primary"
                  to="/account"
                >
                  {t("Header.Navbar.myAccount")}
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3.5 py-2 transition-all duration-300 hover:bg-tertiary hover:ps-5 hover:text-primary"
                  to="/account/purchase"
                >
                  {t("Header.Navbar.myPurchase")}
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3.5 py-2 transition-all duration-300 hover:bg-tertiary hover:ps-5 hover:text-primary"
                  to="/account/reservation"
                >
                  {t("Header.Navbar.myReservation")}
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3.5 py-2 transition-all duration-300 hover:bg-tertiary hover:ps-5 hover:text-primary"
                  to={`/favorite-dish/${12}`}
                >
                  {t("Header.Navbar.favoriteDish")}
                </Link>
              </li>
            </ul>
            <div className="py-2">
              <button
                className="w-full px-3.5 py-2 text-left transition-all duration-300 hover:bg-tertiary hover:ps-5 hover:text-primary"
                onClick={() => handleLogout()}
              >
                {t("Header.Navbar.logout")}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex w-60 flex-col gap-3 rounded-md bg-primary p-3">
            <Link
              to="/login"
              className="rounded-md bg-tertiary p-2.5 text-center text-sm font-medium text-primary duration-500 hover:bg-yellow-600"
            >
              {t("Header.Navbar.login")}
              <span hidden>{t("Header.Navbar.logout")}</span>
            </Link>
            <Link
              to="/register"
              className="rounded-md bg-tertiary p-2.5 text-center text-sm font-medium text-primary duration-500 hover:bg-yellow-600"
            >
              {t("Header.Navbar.register")}
            </Link>
            <Link
              to={`/favorite-dish/${12}`}
              className="rounded-md bg-tertiary p-2.5 text-center text-sm font-medium text-primary duration-500 hover:bg-yellow-600"
            >
              {t("Header.Navbar.favoriteDish")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
