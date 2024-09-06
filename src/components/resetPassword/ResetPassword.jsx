import "./ResetPassword.css";
import { useRef, useState } from "react";
import { Carousel, Steps } from "antd";
import VerifyEmail from "./verifyEmail";
import VerificationCode from "./VerificationCode";
import NewPassword from "./NewPassword";
import { useTranslation } from "react-i18next";

const steps = [
  "ResetPassword.verify_email",
  "ResetPassword.verification_code",
  "ResetPassword.new_password",
];

const ResetPassword = () => {
  const { t } = useTranslation();

  const [current, setCurrent] = useState(0);
  const carouselRef = useRef();

  const next = () => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.goTo(current + 1);
      setCurrent((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };
  const prev = () => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.goTo(current - 1);
      setCurrent((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleVerifyEmail = (data) => {
    console.log(data);
    next();
  };

  const handleVerificationCode = (data) => {
    console.log(data);
    next();
  };

  const handleNewPassword = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto sm:space-y-10 md:w-10/12 lg:w-9/12">
      <Steps current={current} className="!hidden sm:!flex">
        {steps.map((step, index) => (
          <Steps.Step key={index} title={t(step)} />
        ))}
      </Steps>

      <div className="mx-auto rounded px-6 sm:w-3/5 sm:border sm:border-dashed sm:border-gray-300 sm:p-4 md:w-3/5 lg:w-1/2">
        <Carousel ref={carouselRef} dots={false}>
          <div>
            <VerifyEmail handleVerifyEmail={handleVerifyEmail} />
          </div>
          <div>
            <VerificationCode
              prev={prev}
              handleVerificationCode={handleVerificationCode}
            />
          </div>
          <div>
            <NewPassword prev={prev} handleNewPassword={handleNewPassword} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ResetPassword;
