import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <p className="text-center text-primary text-2xl font-semibold mb-6">
        ĐĂNG KÝ
      </p>
      <form className="w-full space-y-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-primary px-3 py-2.5 rounded border-b-2 border-tertiary outline-none text-gray-900 text-base"
          />
        </div>
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
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="w-full relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            autoComplete="new-password"
            className="w-full bg-primary px-3 py-2.5 rounded border-b-2 border-tertiary outline-none text-gray-900 text-base"
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 cursor-pointer hover:text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </form>
      <div className="mt-8 w-full">
        <button className="w-full bg-tertiary px-4 py-2.5 rounded-md font-semibold hover:bg-[#d6861f]">
          Đăng ký
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
