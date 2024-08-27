import * as yup from "yup";
import Input from "../inputs/Input";
import PasswordInput from "../inputs/PassowordInput";
import { useAppForm } from "../../hooks";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const registerFormSchema = yup
  .object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(25, "Password must be at most 25 characters")
      .required("Password is required."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Confirm password does not match")
      .required("Confirm password is required"),
  })
  .required();

const RegisterForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useAppForm(registerFormSchema);

  const password = watch("password");

  useEffect(() => {
    if (password) {
      trigger("confirmPassword");
    }
  }, [password, trigger]);

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <p className="text-center text-primary text-2xl font-semibold uppercase mb-6">
        {t("Auth.register")}
      </p>
      <form
        id="register"
        className="w-full space-y-5"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Input
          type="text"
          placeholder={t("Auth.username")}
          className="w-full bg-primary px-3 py-2.5 rounded border-b-2 border-tertiary outline-none text-gray-900 text-base"
          label="username"
          register={register}
          errors={errors}
          errorStyle={{ borderBottomColor: "red" }}
        />
        <Input
          type="email"
          placeholder={t("Auth.email")}
          autoComplete="email"
          className="w-full bg-primary px-3 py-2.5 rounded border-b-2 border-tertiary outline-none text-gray-900 text-base"
          label="email"
          register={register}
          errors={errors}
          errorStyle={{ borderBottomColor: "red" }}
        />
        <PasswordInput
          placeholder={t("Auth.password")}
          className="w-full bg-primary px-3 py-2.5 rounded border-b-2 border-tertiary outline-none text-gray-900 text-base"
          label="password"
          register={register}
          errors={errors}
          errorStyle={{ borderBottomColor: "red" }}
        />
        <PasswordInput
          placeholder={t("Auth.confirm_password")}
          className="w-full bg-primary px-3 py-2.5 rounded border-b-2 border-tertiary outline-none text-gray-900 text-base"
          label="confirmPassword"
          register={register}
          errors={errors}
          errorStyle={{ borderBottomColor: "red" }}
        />
      </form>
      <div className="mt-8 w-full">
        <button
          form="register"
          className="w-full bg-tertiary px-4 py-2.5 rounded-md font-semibold hover:bg-[#d6861f]"
        >
          {t("Auth.register")}
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
