import { useDynamicTitle } from "../hooks";
import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.login"));

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
