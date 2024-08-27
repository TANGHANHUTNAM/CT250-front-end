import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const CartPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.cart"));

  return <>CartPage</>;
};

export default CartPage;
