import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";

const PaymentResult = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.paymentResult"));
  useTopPage();

  return (
    <BodyLayout>
      <div>Payment result</div>
    </BodyLayout>
  );
};

export default PaymentResult;
