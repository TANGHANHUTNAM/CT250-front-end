import logo from "../../assets/logo.png";
import "./HeaderNav.css";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import SideBar from "./SideBar";
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import RightNavBar from "./RightNavBar";
import Search from "../search/Search";

const HeaderNav = () => {
  const { t } = useTranslation();

  const [visable, setVisible] = useState(false);
  const [visableSearch, setVisibleSearch] = useState(false);

  const handleCloseSearch = () => {
    setVisibleSearch((show) => !show);
  };

  return (
    <>
      {/* Navbar */}
      <div className="relative z-50 mx-auto flex w-full max-w-screen-xl items-center justify-between p-3">
        {/* Logo */}
        <div>
          <NavLink
            to="/"
            className="flex h-[60px] w-[120px] items-center justify-between sm:w-[130px] lg:w-[140px]"
          >
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        {/* Menu */}
        <NavBar />
        {/* Search Cart User */}
        <RightNavBar
          handleCloseSearch={handleCloseSearch}
          setVisible={setVisible}
        />
      </div>

      {/* Search for screen small */}
      {visableSearch && (
        <div className="w-full bg-bgPrimary px-4 pb-4 sm:hidden">
          <Search />
        </div>
      )}

      {/* Sidebar menu for screen small*/}
      <SideBar visable={visable} setVisible={setVisible} />
    </>
  );
};

export default HeaderNav;
