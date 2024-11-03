import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
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

    const mediaQuery = window.matchMedia("(min-width: 640px)"); // sm: 640px

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
        setShowHeader(true); // Reset header visibility when screen size is less than sm
      }
    };

    // Initial check
    if (mediaQuery.matches) {
      window.addEventListener("scroll", handleScroll);
    }

    // Listen for media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [lastScrollTop]);
  return (
    <div className="main-layout min-h-screen">
      <div className={`top-0 z-50 ${showHeader ? "sticky" : ""}`}>
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
