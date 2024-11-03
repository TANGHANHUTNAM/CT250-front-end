import * as yup from "yup";
import Input from "../inputs/Input";
import PasswordInput from "../inputs/PassowordInput";
import { useAppForm } from "../../hooks";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { register as registerService } from "../../services/authService";
import StatusCodes from "../../utils/StatusCodes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Error message là các key để translate đa ngôn ngữ và ở các component Input phải có props translation = true
const registerFormSchema = yup
  .object({
    username: yup.string().required("Auth.required_username"),
    email: yup
      .string()
      .email("Auth.invalid_email")
      .required("Auth.required_email"),
    password: yup
      .string()
      .min(6, "Auth.password_min")
      .max(25, "Auth.password_max")
      .required("Auth.required_password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Auth.confirm_password_not_match")
      .required("Auth.required_confirm_password"),
  })
  .required();

const RegisterForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  const handleRegister = async (data) => {
    const res = await registerService(data);

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      toast.success("Đăng ký thành công!");
      navigate("/login");
    }

    if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
      toast.error(res.EM);
    }
  };

  return (
    <div className="w-full">
      <p className="mb-6 text-center text-2xl font-semibold uppercase text-primary">
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
          className="w-full rounded border-b-2 border-tertiary bg-primary px-3 py-2.5 text-base text-gray-900 outline-none"
          label="username"
          register={register}
          errors={errors}
          errorStyle={{ borderBottomColor: "red" }}
          translation={true}
        />
        <Input
          type="email"
          placeholder={t("Auth.email")}
          autoComplete="email"
          className="w-full rounded border-b-2 border-tertiary bg-primary px-3 py-2.5 text-base text-gray-900 outline-none"
          label="email"
          register={register}
          errors={errors}
          errorStyle={{ borderBottomColor: "red" }}
          translation={true}
        />
        <PasswordInput
          placeholder={t("Auth.password")}
          className="w-full rounded border-b-2 border-tertiary bg-primary px-3 py-2.5 text-base text-gray-900 outline-none"
          label="password"
          register={register}
          errors={errors}
          errorStyle={{ borderBottomColor: "red" }}
          translation={true}
        />
        <PasswordInput
          placeholder={t("Auth.confirm_password")}
          className="w-full rounded border-b-2 border-tertiary bg-primary px-3 py-2.5 text-base text-gray-900 outline-none"
          label="confirmPassword"
          register={register}
          errors={errors}
          errorStyle={{ borderBottomColor: "red" }}
          translation={true}
        />
      </form>
      <div className="mt-8 w-full">
        <button
          form="register"
          className="w-full rounded-md bg-tertiary px-4 py-2.5 text-base font-semibold hover:bg-[#d6861f]"
        >
          {t("Auth.register")}
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
