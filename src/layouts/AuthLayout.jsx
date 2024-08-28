import "./Layout.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AuthLayout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="auth w-full bg-bgPrimary">
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="w-full py-8 sm:py-10">
          <div className="w-full px-5 text-primary sm:mx-auto sm:w-[32rem] sm:rounded-md sm:bg-[#224642] sm:p-6 md:w-[34rem]">
            <ul className="flex-nowraps mb-8 flex w-full gap-1">
              <li className="grow font-medium">
                <NavLink
                  to="/register"
                  className="flex w-full items-center justify-center border-b border-solid border-b-primary py-3 uppercase hover:text-tertiary"
                >
                  {t("Auth.register")}
                </NavLink>
              </li>
              <li className="grow font-medium">
                <NavLink
                  to="/login"
                  className="flex w-full items-center justify-center border-b border-solid border-b-primary py-3 uppercase hover:text-tertiary"
                >
                  {t("Auth.login")}
                </NavLink>
              </li>
            </ul>

            {children}

            <div className="mt-6 w-full">
              <p className="mb-4 text-center text-sm text-gray-200">
                {t("Auth.login_with")}
              </p>
              <div className="mx-auto flex w-72 flex-nowrap gap-2 sm:w-2/3">
                <button className="flex w-1/2 flex-nowrap items-center rounded-sm bg-blue-600 text-primary hover:bg-blue-700">
                  <span className="border-r border-solid border-gray-400 p-3">
                    <FaFacebookF />
                  </span>
                  <span className="flex w-full justify-center text-sm font-medium">
                    Facebook
                  </span>
                </button>
                <button className="flex w-1/2 flex-nowrap items-center rounded-sm bg-red-600 text-primary hover:bg-red-700">
                  <span className="border-r border-solid border-gray-400 p-3">
                    <FaGoogle />
                  </span>
                  <span className="flex w-full justify-center text-sm font-medium">
                    Google
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
