import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const PersonalPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.my_account.account"));
  useTopPage();

  return <div className="p-4 text-primary">Account</div>;
};

export default PersonalPage;
