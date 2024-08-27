import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const DishPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.all_dishes"));

  return <>DishPage</>;
};

export default DishPage;
