import * as yup from "yup";
import { useAppForm } from "../../hooks";
import Input from "../inputs/Input";
import { useTranslation } from "react-i18next";

const schema = yup
  .object({
    email: yup
      .string()
      .email("ResetPassword.invalid_email")
      .required("ResetPassword.required_email"),
  })
  .required();

const VerifyEmail = ({ handleVerifyEmail }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(schema);

  const { t } = useTranslation();

  return (
    <div className="w-full px-1">
      <p className="text-center text-lg font-semibold uppercase text-white">
        {t("ResetPassword.verify_email")}
      </p>
      <div className="pt-8">
        <form onSubmit={handleSubmit(handleVerifyEmail)}>
          <Input
            className="w-full rounded border-b-2 border-tertiary px-3 py-2.5 text-sm outline-none"
            type="email"
            placeholder="Email..."
            autoComplete="email"
            label="email"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            errorClass="text-xs text-[#ff0000] pt-1.5 block font-medium"
            translation={true}
          />
          <div className="flex justify-end pt-8">
            <button className="rounded-md bg-orange-400 px-5 py-2 text-sm font-medium text-white hover:bg-orange-500">
              {t("ResetPassword.next")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
