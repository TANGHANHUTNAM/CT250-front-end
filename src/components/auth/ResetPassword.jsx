import "./ResetPassword.css";
import { useRef, useState } from "react";
import { Carousel, Input, message, Steps } from "antd";

const steps = ["Verify email", "Verification code", "New password"];

const ResetPassword = () => {
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

  return (
    <div className="mx-auto sm:space-y-10 md:w-10/12 lg:w-9/12">
      <Steps current={current} className="!hidden sm:!flex">
        {steps.map((step, index) => (
          <Steps.Step key={index} title={step} />
        ))}
      </Steps>

      <div className="mx-auto rounded px-6 sm:w-3/5 sm:border sm:border-dashed sm:border-gray-300 sm:p-4 md:w-3/5 lg:w-1/2">
        <Carousel ref={carouselRef} dots={false}>
          <div>
            <div className="w-full">
              <p className="text-center text-lg font-semibold uppercase text-white">
                Verify email
              </p>
              <div className="px-1 py-8">
                <input
                  className="w-full rounded border-b-2 border-tertiary px-3 py-2.5 text-sm outline-none"
                  type="email"
                  placeholder="Email..."
                />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <p className="text-center text-lg font-semibold uppercase text-white">
                Virification code
              </p>
              <div className="flex justify-center px-1 py-8">
                <Input.OTP inputMode="numeric" length={4} />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <p className="text-center text-lg font-semibold uppercase text-white">
                New password
              </p>
              <div className="px-1 py-8">
                <input
                  className="w-full rounded border-b-2 border-tertiary px-3 py-2.5 text-sm outline-none"
                  type="password"
                  placeholder="New password..."
                />
              </div>
            </div>
          </div>
        </Carousel>

        <div
          className={`flex ${current > 0 ? "justify-between" : "justify-end"}`}
        >
          {current > 0 && (
            <button
              className="rounded-md bg-gray-100 px-5 py-2 text-sm font-medium hover:bg-gray-300"
              onClick={() => prev()}
            >
              Back
            </button>
          )}
          {current < steps.length - 1 && (
            <button
              className="rounded-md bg-orange-400 px-5 py-2 text-sm font-medium text-white hover:bg-orange-500"
              onClick={() => next()}
            >
              Next
            </button>
          )}
          {current === steps.length - 1 && (
            <button
              className="rounded-md bg-orange-400 px-5 py-2 text-sm font-medium text-white hover:bg-orange-500"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
