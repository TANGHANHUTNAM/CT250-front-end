import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import Search from "../search/Search";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { Badge } from "antd";

const RightNavBar = ({ handleCloseSearch, setVisible }) => {
  const { t } = useTranslation();

  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex items-center gap-2.5 lg:gap-4">
      {/* Search-icons */}
      <div className="group relative">
        <span
          onClick={() => {
            handleCloseSearch();
          }}
        >
          <IoIosSearch className="cursor-pointer text-3xl text-primary duration-500 hover:text-tertiary" />
        </span>
        <div className="dropdown-menu absolute right-0 hidden scale-90 pt-4 opacity-0 transition-all duration-300 will-change-transform sm:invisible sm:block sm:group-hover:visible sm:group-hover:scale-100 sm:group-hover:opacity-100">
          <Search />
        </div>
      </div>

      {/* Cart-icons */}
      <Link to="/cart" className="relative">
        <Badge
          count={cart?.length ?? 0}
          offset={[-2, 0]}
          color="#d69c52"
          overflowCount={9}
          size="small"
          styles={{
            indicator: {
              boxShadow: "none",
              fontSize: "10px",
              minWidth: "15px",
              height: "15px",
            },
          }}
        >
          <BsCart3 className="cursor-pointer text-2xl text-primary" />
        </Badge>
      </Link>

      {/* User-icons */}
      <UserMenu />

      {/* Booking */}
      <Link className="booking-table hidden md:flex" to="/booking">
        <button className="rounded-md bg-tertiary px-2 py-2.5 text-sm font-bold text-primary duration-500 hover:bg-yellow-600 lg:px-4">
          {t("Header.Navbar.booking")}
        </button>
      </Link>

      {/* Menu-icons */}
      <span
        onClick={() => {
          setVisible(true);
        }}
        className="cursor-pointer text-[36px] text-primary duration-500 hover:text-tertiary md:hidden"
      >
        <CgMenuRightAlt />
      </span>
    </div>
  );
};

export default RightNavBar;
