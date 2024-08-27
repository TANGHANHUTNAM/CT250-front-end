import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const FavoriteDishPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.favorite_dishes"));

  return <>FavoriteDishPage</>;
};

export default FavoriteDishPage;
