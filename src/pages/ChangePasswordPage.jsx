import ChangePasswordForm from "../components/account/ChangePasswordForm";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const ChangePasswordPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.my_account.change_password"));
  useTopPage();

  return (
    <div className="divide-y divide-solid divide-white/10 px-2 text-primary md:px-6">
      <div className="py-4">
        <p className="text-lg font-bold">
          {t("ManageAccount.changePasswordPage.title")}
        </p>
      </div>
      <div className="py-6">
        <div className="sr-530:w-4/5 mx-auto sm:w-full lg:w-4/5 xl:w-3/5">
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
