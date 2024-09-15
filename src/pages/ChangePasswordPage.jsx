import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const ChangePasswordPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.my_account.change_password"));
  useTopPage();

  return <div className="p-4 text-primary">Change password</div>;
};

export default ChangePasswordPage;
