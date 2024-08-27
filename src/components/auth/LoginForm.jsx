import * as yup from "yup";
import Input from "../inputs/Input";
import PasswordInput from "../inputs/PassowordInput";
import { useAppForm } from "../../hooks";

const loginFormSchema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(25, "Password must be at most 25 characters")
      .required("Password is required."),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(loginFormSchema);

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <p className="text-center text-primary text-2xl font-semibold mb-6">
        ĐĂNG NHẬP
      </p>
      <form
        id="login"
        className="w-full space-y-5"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Input
          type="email"
          placeholder="Email"
          autoComplete="email"
          className="w-full bg-primary px-3 py-2.5 rounded border-b-2 border-tertiary outline-none text-gray-900 text-base"
          label="email"
          register={register}
          errors={errors}
          errorStyle={{ borderBottomColor: "red" }}
        />
        <PasswordInput
          placeholder="Password"
          className="w-full bg-primary px-3 py-2.5 rounded border-b-2 border-tertiary outline-none text-gray-900 text-base"
          label="password"
          register={register}
          errors={errors}
          errorStyle={{ borderBottomColor: "red" }}
        />
      </form>
      <div className="mt-8 w-full">
        <button
          form="login"
          className="w-full bg-tertiary px-4 py-2.5 rounded-md font-semibold hover:bg-[#d6861f]"
        >
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
