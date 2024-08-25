import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
const MainLayout = () => {
  return (
    <div className="main-layout ">
      <div className="header sticky top-0">
        <Header />
      </div>
      <div className="main min-h-screen">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
