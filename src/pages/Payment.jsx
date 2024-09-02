import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const PaymentPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.payment"));
  useTopPage();
  return <>PaymentPage</>;
};

export default PaymentPage;
