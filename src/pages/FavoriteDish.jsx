import { useEffect } from "react";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const FavoriteDishPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.favorite_dishes"));
  useTopPage();
  return <>FavoriteDishPage</>;
};

export default FavoriteDishPage;
