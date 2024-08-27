import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <p className="text-center text-primary text-2xl font-semibold mb-6">
        ĐĂNG NHẬP
      </p>
      <form className="w-full space-y-5">
        <div className="w-full">
          <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="w-full bg-primary px-3 py-2.5 rounded border-b-2 border-tertiary outline-none text-gray-900 text-base"
          />
        </div>
        <div className="w-full relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="new-password"
            className="w-full bg-primary px-3 py-2.5 rounded border-b-2 border-tertiary outline-none text-gray-900 text-base"
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 cursor-pointer hover:text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
      </form>
      <div className="mt-8 w-full">
        <button className="w-full bg-tertiary px-4 py-2.5 rounded-md font-semibold hover:bg-[#d6861f]">
          Đăng nhập
        </button>
      </div>
      <div className="mt-1.5 w-full text-right">
        <span className="text-sm text-gray-200 cursor-pointer hover:text-tertiary">
          Quên mật khẩu?
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
