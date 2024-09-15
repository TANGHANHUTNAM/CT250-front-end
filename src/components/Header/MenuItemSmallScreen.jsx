import { NavLink } from "react-router-dom";

const MenuItemSmallScreen = ({ menuItem, setVisible }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-2 text-base">
      <NavLink
        className="normal-case hover:text-tertiary"
        onClick={() => setVisible(false)}
        to="/dish"
      >
        Tất cả món ăn
      </NavLink>
      <NavLink
        to="/"
        className="normal-case hover:text-tertiary"
        onClick={() => setVisible(false)}
      >
        Món ăn chính
      </NavLink>
    </div>
  );
};

export default MenuItemSmallScreen;
