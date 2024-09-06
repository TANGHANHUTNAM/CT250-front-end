import { useTranslation } from "react-i18next";
import { useDynamicTitle } from "../hooks";
import ResetPassword from "../components/resetPassword/ResetPassword";

const ResetPasswordPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.reset_password"));

  return (
    <div className="w-full bg-bgPrimary">
      <div className="mx-auto max-w-screen-xl px-3 py-10">
        <ResetPassword />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
