import { useEffect } from "react";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const BestDish = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.best_dishes"));
  useTopPage();
  return <>BestDish</>;
};

export default BestDish;
