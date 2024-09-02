import { useEffect } from "react";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const CartPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.cart"));
  useTopPage();
  return <>CartPage</>;
};

export default CartPage;
