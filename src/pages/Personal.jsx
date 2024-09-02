import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const PersonalPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.my_account"));
  useTopPage();
  return <>PersonalPage</>;
};

export default PersonalPage;
