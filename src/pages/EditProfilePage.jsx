import EditProfileForm from "../components/account/EditProfileForm";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const EditProfilePage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.my_account.edit_profile"));
  useTopPage();

  return (
    <div className="divide-y divide-solid divide-white/10 px-2 text-primary md:px-6">
      <div className="py-4">
        <p className="text-lg font-bold">
          {t("ManageAccount.editProfilePage.title")}
        </p>
      </div>
      <div className="py-6">
        <EditProfileForm />
      </div>
    </div>
  );
};

export default EditProfilePage;
