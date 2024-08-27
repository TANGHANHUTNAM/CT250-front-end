import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const PersonalPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.my_account"));

  return <>PersonalPage</>;
};

export default PersonalPage;
