import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation, Trans } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";

const PaymentPolicyPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.payment_policy"));
  useTopPage();
  return (
    <BodyLayout>
      <div className="flex w-full flex-col gap-5 py-10 font-medium text-primary">
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
    </BodyLayout>
  );
};

export default PaymentPolicyPage;
