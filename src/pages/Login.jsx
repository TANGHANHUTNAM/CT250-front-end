import { useDynamicTitle } from "../hooks";
import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  useDynamicTitle("Đăng nhập");

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
