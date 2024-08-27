import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";
const PaymentInstructionPage = () => {
  useDynamicTitle("Hướng dẫn thanh toán");
  const { t } = useTranslation();
  return (
    <div className="bg-bgPrimary">
      <div className="max-w-screen-xl mx-auto w-full text-primary px-3 flex flex-col gap-5 font-medium py-10 ">
        <p className="text-3xl font-semibold">
          {t("PaymentInstruction.title")}
        </p>
        <p>{t("PaymentInstruction.content_1")}</p>
        <p>{t("PaymentInstruction.content_2")}</p>
        <p>{t("PaymentInstruction.content_3")}</p>
        <p>{t("PaymentInstruction.content_4")}</p>
        <p>{t("PaymentInstruction.content_5")}</p>
        <p>{t("PaymentInstruction.content_6")}</p>
      </div>
    </div>
  );
};

export default PaymentInstructionPage;
