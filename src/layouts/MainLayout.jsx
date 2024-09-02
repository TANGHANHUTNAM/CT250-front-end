import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <div className="main-layout min-h-screen">
      <div className={`top-0 z-50 duration-300 ${showHeader ? "sticky" : ""}`}>
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
