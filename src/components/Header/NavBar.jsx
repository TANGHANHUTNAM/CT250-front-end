import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

import { MdOutlineArrowDropDown } from "react-icons/md";

const NavBar = ({ listCategory }) => {
  const { t } = useTranslation();
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
      <div className="group relative duration-500 hover:text-tertiary">
        <NavLink
          className="nav-link-name flex flex-row items-center justify-center"
          to="/dish"
        >
          <span>{t("Header.Navbar.menu")}</span>
          <span className="text-lg transition-transform duration-500 group-hover:rotate-180">
            <MdOutlineArrowDropDown />
          </span>
        </NavLink>
        <div className="absolute top-8 hidden min-w-fit scale-90 rounded-sm border border-solid border-tertiary bg-bgPrimary/85 px-6 py-2 opacity-0 shadow-lg transition-all duration-300 will-change-transform sm:invisible sm:block sm:group-hover:visible sm:group-hover:scale-100 sm:group-hover:opacity-100">
          {listCategory?.map((item) => {
            return (
              <Link
                to={`/dish/${item?._id}`}
                className="nav-link-name my-4 flex min-w-56 flex-col items-start font-semibold text-white/90 duration-300 hover:pl-3 hover:text-tertiary"
                key={item?._id}
              >
                {item?.name}
              </Link>
            );
          })}
        </div>
      </div>
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
