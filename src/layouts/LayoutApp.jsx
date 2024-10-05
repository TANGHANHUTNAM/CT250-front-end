import { useSelector } from "react-redux";
import LoadingPage from "../pages/LoadingPage";

const LayoutApp = ({ children }) => {
  const { isLoadingApp } = useSelector((state) => state.app);
  return <>{isLoadingApp ? <LoadingPage /> : children}</>;
};

export default LayoutApp;
