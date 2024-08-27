import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const IntroducePage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.introduction"));

  return <>IntroducePage</>;
};

export default IntroducePage;
