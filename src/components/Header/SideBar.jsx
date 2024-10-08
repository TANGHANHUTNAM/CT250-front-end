import { RxDoubleArrowRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { MdOutlineArrowDropDown } from "react-icons/md";
import MenuItemSmallScreen from "./MenuItemSmallScreen";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { useState } from "react";
const SideBar = ({ visable, setVisible, listCategory }) => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div
        className={`fixed bottom-0 right-0 top-0 z-50 overflow-hidden bg-bgOpacity font-bold uppercase text-primary transition-all duration-500 ease-in-out md:hidden ${
          visable ? "w-full" : "w-0"
        } `}
      >
        <div
          onClick={() => {
            setVisible(false);
          }}
          className="flex cursor-pointer flex-col px-1 py-5"
        >
          <div className="item-center flex gap-1 p-3 hover:text-tertiary">
            <RxDoubleArrowRight className="text-center text-[24px]" />
            {t("Header.Navbar.close")}
          </div>
        </div>

        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/"
          className="flex flex-col items-center gap-1 border py-2 duration-500 hover:text-tertiary"
        >
          {t("Header.Navbar.home")}
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/introduce"
          className="flex flex-col items-center gap-1 py-2 duration-500 hover:text-tertiary"
        >
          {t("Header.Navbar.introduce")}
        </NavLink>
        <div className="relative flex cursor-pointer flex-col items-center justify-center overflow-hidden py-2 duration-500">
          <span
            onClick={handleClick}
            className="ml-3 flex flex-row items-center duration-300 hover:text-tertiary"
          >
            {t("Header.Navbar.menu")}
            <span className="text-lg">
              {openMenu ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
            </span>
          </span>
          {/* MenuItem for Small Screen */}
          {openMenu && (
            <MenuItemSmallScreen
              listCategory={listCategory}
              setVisible={setVisible}
            />
          )}
        </div>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/best-dish"
          className="flex flex-col items-center gap-1 py-2 duration-500 hover:text-tertiary"
        >
          {t("Header.Navbar.bestDish")}
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/delicious-dish"
          className="flex flex-col items-center gap-1 py-2 duration-500 hover:text-tertiary"
        >
          {t("Header.Navbar.deliciousDish")}
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/news"
          className="flex flex-col items-center gap-1 py-2 duration-500 hover:text-tertiary"
        >
          {t("Header.Navbar.news")}
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/contact"
          className="flex flex-col items-center gap-1 py-2 duration-500 hover:text-tertiary"
        >
          {t("Header.Navbar.contact")}
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          className="flex flex-col items-center gap-1 px-4"
          to="/booking"
        >
          <button className="h-10 w-full rounded-md bg-tertiary text-lg uppercase text-primary duration-500 hover:bg-yellow-600">
            {t("Header.Navbar.booking")}
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default SideBar;
