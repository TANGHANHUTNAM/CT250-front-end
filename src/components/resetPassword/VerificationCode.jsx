import * as yup from "yup";
import { useApi, useAppForm } from "../../hooks";
import OPTInput from "../inputs/OTPInput";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LoadingButton from "../buttons/LoadingButton";
import {
  checkVerificationCode,
  verifyEmailWhenForgotPassword,
} from "../../services/accountService";
import { _ } from "lodash";
import StatusCodes from "../../utils/StatusCodes";
import { toast } from "react-toastify";

const schema = yup
  .object({
    verificationCode: yup
      .number()
      .required("ResetPassword.required_verification_code"),
  })
  .required();

const defaultTime = 5 * 60; // 3 minutes in seconds
const formatTime = (time) => {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const VerificationCode = ({
  prev,
  handleVerificationCode,
  currentStep = -1,
  user = {},
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useAppForm(schema);

  const { t } = useTranslation();

  const [time, setTime] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);

  const restartTimer = () => {
    setTime(defaultTime);
    setIsRunning(true);
  };

  useEffect(() => {
    if (currentStep === 1) {
      restartTimer();
    }
  }, [currentStep]);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const { loading: resendLoading, apiFunction: getVerifyCode } = useApi(
    async (data) => await verifyEmailWhenForgotPassword(data),
  );

  const handleResendCode = async () => {
    if (!_.isEmpty(user)) {
      const res = await getVerifyCode({ email: user.email });

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        restartTimer();
      }

      if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
        toast.error(res.EM);
      }
    }
  };

  const { loading: checkLoading, apiFunction: handleCheckCode } = useApi(
    async (data) => await checkVerificationCode(data),
  );

  const handleCheckVerificationCode = async (data) => {
    handleVerificationCode(async (next = () => {}) => {
      const res = await handleCheckCode({ ...user, ...data });

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT && res.DT.valid) {
        next();
      }

      if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
        toast.error(res.EM);
      }
    });
  };

  return (
    <div className="w-full px-1">
      <p className="text-center text-lg font-semibold uppercase text-white">
        {t("ResetPassword.verification_code")}
      </p>
      <form onSubmit={handleSubmit(handleCheckVerificationCode)}>
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
        <div className="flex items-center justify-between pt-8">
          <button
            type="button"
            className="rounded-md bg-gray-100 px-5 py-2 text-sm font-medium hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-gray-100"
            onClick={() => prev()}
            disabled={resendLoading || checkLoading}
          >
            {t("ResetPassword.back")}
          </button>
          {isRunning && time > 0 && (
            <div className="text-center text-lg text-tertiary">
              {formatTime(time)}
            </div>
          )}
          {!isRunning && (
            <div
              className="cursor-pointer text-center text-sm font-medium text-tertiary hover:text-yellow-600"
              onClick={() => handleResendCode()}
            >
              {t("ResetPassword.resendCode")}
            </div>
          )}
          <LoadingButton
            label={t("ResetPassword.next")}
            loading={checkLoading}
            buttonClass="rounded-md bg-orange-400 px-5 py-2 text-sm font-medium text-white hover:bg-orange-500 disabled:hover:bg-orange-400"
          />
        </div>
      </form>
    </div>
  );
};

export default VerificationCode;
