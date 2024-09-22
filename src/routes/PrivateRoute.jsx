import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return isAuth === true ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;