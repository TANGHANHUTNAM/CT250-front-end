import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const SearchPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.search"));
  useTopPage();
  return <>SearchPage</>;
};

export default SearchPage;
