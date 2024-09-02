import { useDynamicTitle, useTopPage } from "../hooks";
import AuthLayout from "../layouts/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.register"));
  useTopPage();
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
