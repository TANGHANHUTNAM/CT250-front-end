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
      toast.success(res.EM);
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
          <div className="min-w-56 divide-y divide-solid divide-gray-200 rounded-md bg-primary px-2 text-sm">
            <div className="space-y-0.5 py-2.5">
              <p className="font-bold">{username}</p>
              <p className="text-xs font-medium">{email}</p>
            </div>
            <ul className="space-y-2 py-2.5 text-gray-900">
              <li className="cursor-pointer border-l-4 border-solid border-tertiary py-2.5 ps-2 transition-all duration-200 hover:border-x-4 hover:border-yellow-700 hover:bg-tertiary hover:text-primary">
                <Link to="/personal/12">{t("Header.Navbar.myAccount")}</Link>
              </li>
              <li className="cursor-pointer border-l-4 border-solid border-tertiary py-2.5 ps-2 transition-all duration-200 hover:border-x-4 hover:border-yellow-700 hover:bg-tertiary hover:text-primary">
                <Link to={`/favorite-dish/${12}`}>
                  {t("Header.Navbar.favoriteDish")}
                </Link>
              </li>
            </ul>
            <div className="py-2.5">
              <button
                className="w-full rounded-md bg-tertiary py-2.5 text-center text-sm font-medium text-primary duration-500 hover:bg-yellow-600"
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
