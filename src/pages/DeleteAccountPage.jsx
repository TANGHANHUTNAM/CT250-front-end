import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const DeleteAccountPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.my_account.delete_account"));
  useTopPage();

  return <div className="p-4 text-primary">Delete account</div>;
};

export default DeleteAccountPage;
