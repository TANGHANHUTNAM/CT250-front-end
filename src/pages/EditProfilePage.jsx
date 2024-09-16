import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const EditProfilePage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.my_account.edit_profile"));
  useTopPage();

  return <div className="p-4 text-primary">Edit profile</div>;
};

export default EditProfilePage;
