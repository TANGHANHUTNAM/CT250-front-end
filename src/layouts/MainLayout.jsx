import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const MainLayout = () => {
  return (
    <div className="main-layout min-h-screen">
      <Header />
      <div className="body">
        <div className="max-w-screen-xl mx-auto w-full text-primary px-3"></div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
