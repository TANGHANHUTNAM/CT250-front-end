import * as yup from "yup";
import { useAppForm } from "../../hooks";
import PasswordInput from "../inputs/PassowordInput";
import { useTranslation } from "react-i18next";

const schema = yup
  .object({
    password: yup
      .string()
      .min(6, "ResetPassword.password_min")
      .max(25, "ResetPassword.password_max")
      .required("ResetPassword.required_password"),
  })
  .required();

const NewPassword = ({ prev, handleNewPassword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(schema);

  const { t } = useTranslation();

  return (
    <div className="w-full px-1">
      <p className="text-center text-lg font-semibold uppercase text-white">
        {t("ResetPassword.new_password")}
      </p>
      <div className="pt-8">
        <form onSubmit={handleSubmit(handleNewPassword)}>
          <input autoComplete="username" aria-hidden hidden />
          <PasswordInput
            className="w-full rounded border-b-2 border-tertiary px-3 py-2.5 text-sm outline-none"
            placeholder={`${t("ResetPassword.new_password")}...`}
            label="password"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            errorClass="text-xs text-[#ff0000] pt-1.5 block font-medium"
            translation={true}
          />
          <div className="flex justify-between pt-8">
            <button
              type="button"
              className="rounded-md bg-gray-100 px-5 py-2 text-sm font-medium hover:bg-gray-300"
              onClick={() => prev()}
            >
              {t("ResetPassword.back")}
            </button>
            <button className="rounded-md bg-orange-400 px-5 py-2 text-sm font-medium text-white hover:bg-orange-500">
              {t("ResetPassword.done")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
