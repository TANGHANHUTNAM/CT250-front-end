import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const PaymentInstructionPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.payment_instruction"));
  useTopPage();
  return (
    <div className="bg-bgPrimary">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-5 px-3 py-10 font-medium text-primary">
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
