import logo from "../../assets/logo.png";
import "./HeaderNav.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import RightNavBar from "./RightNavBar";
import Search from "../search/Search";
import { getCategories } from "../../services/categoryService";
import StatusCodes from "../../utils/StatusCodes";
import { set } from "react-hook-form";

const HeaderNav = () => {
  const { t } = useTranslation();

  const [visable, setVisible] = useState(false);
  const [visableSearch, setVisibleSearch] = useState(false);

  const handleCloseSearch = () => {
    setVisibleSearch((show) => !show);
  };

  const [listCategory, setListCategory] = useState([]);
  const getCategoryLevel1 = async () => {
    const res = await getCategories();
    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      setListCategory(res.DT);
    }
    if (res && res.EC !== StatusCodes.SUCCESS_DAFAULT) {
      setListCategory([]);
    }
  };
  useEffect(() => {
    getCategoryLevel1();
  }, []);
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
        <NavBar listCategory={listCategory} />
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
      <SideBar
        listCategory={listCategory}
        visable={visable}
        setVisible={setVisible}
      />
    </>
  );
};

export default HeaderNav;
