import { useDynamicTitle, useTopPage } from "../hooks";
import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.login"));
  useTopPage();
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
