import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
