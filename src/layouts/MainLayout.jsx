import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

const MainLayout = () => {
  return (
    <div className="main-layout min-h-screen">
      <div className="sticky top-0 z-50">
        <Header />
        <Breadcrumbs />
      </div>
      <div className="body">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
