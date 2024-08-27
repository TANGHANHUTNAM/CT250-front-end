import { useDynamicTitle } from "../hooks";
import AuthLayout from "../layouts/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  useDynamicTitle("Đăng ký");

  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
