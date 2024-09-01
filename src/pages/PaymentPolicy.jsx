import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation, Trans } from "react-i18next";

const PaymentPolicyPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.payment_policy"));
  useTopPage();
  return (
    <div className="bg-bgPrimary">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-5 px-3 py-10 font-medium text-primary">
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
