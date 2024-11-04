import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const AccountTypeRoute = ({ children }) => {
  const { type } = useSelector((state) => state.user.account);

  return type && type === true ? (
    <>{children}</>
  ) : (
    <Navigate to="/not-found" replace />
  );
};

export default AccountTypeRoute;
