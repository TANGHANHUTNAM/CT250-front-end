import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useState } from "react";

const NavBar = () => {
  const { t } = useTranslation();
  const listMenu = [
    {
      name: "Món chính",
    },
    {
      name: "Món phụ",
    },
    {
      name: "Món khai vị",
    },
    {
      name: "Món tráng miệng",
    },
  ];
  const [menuItem, setMenuItem] = useState(listMenu);
  return (
    <ul className="hidden gap-2 text-[15px] font-semibold text-primary md:flex lg:gap-6">
      <NavLink
        to="/"
        className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
      >
        {t("Header.Navbar.home")}
      </NavLink>
      <NavLink
        to="/introduce"
        className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
      >
        {t("Header.Navbar.introduce")}
      </NavLink>
      <NavLink
        to="/dish"
        className="nav-link-name group relative flex flex-row items-center duration-500 hover:text-tertiary"
      >
        {t("Header.Navbar.menu")}
        {/* MenuItem */}
        <MenuItem menuItem={menuItem} />
      </NavLink>
      <NavLink
        to="/best-dish"
        className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
      >
        {t("Header.Navbar.bestDish")}
      </NavLink>
      <NavLink
        to="/delicious-dish"
        className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
      >
        {t("Header.Navbar.deliciousDish")}
      </NavLink>
      <NavLink
        to="/news"
        className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
      >
        {t("Header.Navbar.news")}
      </NavLink>
      <NavLink
        to="/contact"
        className="nav-link-name flex flex-col items-center gap-1 duration-500 hover:text-tertiary"
      >
        {t("Header.Navbar.contact")}
      </NavLink>
    </ul>
  );
};

export default NavBar;
