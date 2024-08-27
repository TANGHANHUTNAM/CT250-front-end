import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const BestDish = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.best_dishes"));

  return <>BestDish</>;
};

export default BestDish;
