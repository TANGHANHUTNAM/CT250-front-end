import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const PaymentPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.payment"));

  return <>PaymentPage</>;
};

export default PaymentPage;
