import { useTranslation } from "react-i18next";
import { useDynamicTitle } from "../hooks";
import ResetPassword from "../components/resetPassword/ResetPassword";
import BodyLayout from "../layouts/BodyLayout";

const ResetPasswordPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.reset_password"));

  return (
    <BodyLayout>
      <div className="py-10">
        <ResetPassword />
      </div>
    </BodyLayout>
  );
};

export default ResetPasswordPage;
