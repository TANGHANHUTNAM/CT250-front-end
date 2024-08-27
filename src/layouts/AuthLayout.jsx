import "./Layout.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth w-full bg-bgPrimary">
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="py-8 w-full sm:py-10">
          <div className="text-primary px-5 w-full sm:w-[32rem] sm:bg-[#224642] sm:mx-auto sm:p-6 sm:rounded-md md:w-[34rem]">
            <ul className="w-full flex flex-nowraps gap-1 mb-8">
              <li className="grow font-medium">
                <NavLink
                  to="/register"
                  className="flex justify-center items-center w-full py-3 border-b border-solid border-b-primary hover:text-tertiary"
                >
                  ĐĂNG KÝ
                </NavLink>
              </li>
              <li className="grow font-medium">
                <NavLink
                  to="/login"
                  className="flex justify-center items-center w-full py-3 border-b border-solid border-b-primary hover:text-tertiary"
                >
                  ĐĂNG NHẬP
                </NavLink>
              </li>
            </ul>

            {children}

            <div className="w-full mt-6">
              <p className="mb-4 text-sm text-center text-gray-200">
                Hoặc đăng nhập bằng
              </p>
              <div className="w-72 sm:w-2/3 mx-auto flex flex-nowrap gap-2">
                <button className="w-1/2 flex flex-nowrap items-center rounded-sm text-primary bg-blue-600 hover:bg-blue-700">
                  <span className="p-3 border-r border-solid border-gray-400">
                    <FaFacebookF />
                  </span>
                  <span className="flex justify-center w-full text-sm font-medium">
                    Facebook
                  </span>
                </button>
                <button className="w-1/2 flex flex-nowrap items-center rounded-sm text-primary bg-red-600 hover:bg-red-700">
                  <span className="p-3 border-r border-solid border-gray-400">
                    <FaGoogle />
                  </span>
                  <span className="flex justify-center w-full text-sm font-medium">
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
