import * as yup from "yup";
import { useAppForm } from "../../hooks";
import Input from "../inputs/Input";
import OPTInput from "../inputs/OTPInput";
import { useTranslation } from "react-i18next";

const schema = yup
  .object({
    verificationCode: yup
      .number()
      .required("ResetPassword.required_verification_code"),
  })
  .required();

const VerificationCode = ({ prev, handleVerificationCode }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useAppForm(schema);

  const { t } = useTranslation();

  return (
    <div className="w-full px-1">
      <p className="text-center text-lg font-semibold uppercase text-white">
        {t("ResetPassword.verification_code")}
      </p>
      <form onSubmit={handleSubmit(handleVerificationCode)}>
        <div className="flex justify-center pt-8">
          <div>
            <OPTInput
              label="verificationCode"
              control={control}
              errors={errors}
              errorClass="text-xs text-[#ff0000] pt-1.5 block font-medium"
              translation={true}
            />
          </div>
        </div>
        <div className="flex justify-between pt-8">
          <button
            type="button"
            className="rounded-md bg-gray-100 px-5 py-2 text-sm font-medium hover:bg-gray-300"
            onClick={() => prev()}
          >
            {t("ResetPassword.back")}
          </button>
          <button className="rounded-md bg-orange-400 px-5 py-2 text-sm font-medium text-white hover:bg-orange-500">
            {t("ResetPassword.next")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerificationCode;
