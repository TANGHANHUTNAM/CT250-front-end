import { RxDoubleArrowRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
const SideBar = ({ visable, setVisible }) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`fixed text-primary uppercase top-0 right-0 bottom-0 font-bold overflow-hidden bg-bgOpacity transition-all ease-in-out duration-500 ${
          visable ? "w-full " : "w-0"
        } `}
      >
        <div
          onClick={() => {
            setVisible(false);
          }}
          className="flex flex-col cursor-pointer py-5 px-1"
        >
          <div className="flex item-center gap-1 p-3 hover:text-tertiary">
            <RxDoubleArrowRight className="text-center text-[24px]" />
            {t("Header.Navbar.close")}
          </div>
        </div>

        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2 border "
        >
          {t("Header.Navbar.home")}
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/introduce"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
        >
          {t("Header.Navbar.introduce")}
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/dish"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
        >
          {t("Header.Navbar.menu")}
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/best-dish"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
        >
          {t("Header.Navbar.bestDish")}
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/delicious-dish"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
        >
          {t("Header.Navbar.deliciousDish")}
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/news"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
        >
          {t("Header.Navbar.news")}
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/contact"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
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
          <button className="bg-tertiary uppercase text-primary text-lg rounded-md hover:bg-yellow-600 duration-500 w-full h-10">
            {t("Header.Navbar.booking")}
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default SideBar;
