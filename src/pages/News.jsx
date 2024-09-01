import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const NewsPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.news"));
  useTopPage();
  return <>NewsPage</>;
};

export default NewsPage;
