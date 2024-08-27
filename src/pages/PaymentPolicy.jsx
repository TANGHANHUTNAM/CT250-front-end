import { useDynamicTitle } from "../hooks";
import { useTranslation, Trans } from "react-i18next";

const PaymentPolicyPage = () => {
  useDynamicTitle("Chính sách thanh toán");
  const { t } = useTranslation();
  return (
    <div className="bg-bgPrimary">
      <div className="max-w-screen-xl mx-auto w-full text-primary px-3 flex flex-col gap-5 font-medium py-10 ">
        <p className="text-3xl font-semibold">
          {t("PaymentPolicy.title_page")}
        </p>
        <p>{t("PaymentPolicy.content_1")}</p>
        <p>{t("PaymentPolicy.content_2")}</p>
        <p>{t("PaymentPolicy.content_3")}</p>
        <p>{t("PaymentPolicy.content_4")}</p>
        <p>{t("PaymentPolicy.content_5")}</p>
        <p>{t("PaymentPolicy.content_6")}</p>
      </div>
    </div>
  );
};

export default PaymentPolicyPage;
