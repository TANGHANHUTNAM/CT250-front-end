import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/footer/Footer";
const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
