import { useEffect } from "react";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const DeliciousDish = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.delicious_dishes"));
  useTopPage();
  return <>DeliciousDish</>;
};

export default DeliciousDish;
