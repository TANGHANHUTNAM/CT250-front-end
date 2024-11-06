import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MenuItemSmallScreen = ({ listCategory, setVisible }) => {
  const { t } = useTranslation();
  return (
    <div className="mt-2 flex w-full flex-col items-center justify-center gap-2 bg-tertiary py-1 text-base font-semibold">
      <Link
        className="normal-case"
        onClick={() => setVisible(false)}
        to="/dish"
      >
          {t("DishMenuSidebar.allDish")}
      </Link>
      {listCategory?.map((item) => {
        return (
          <Link
            to={`/dish/${item?._id}`}
            className="normal-case"
            key={item?._id}
            onClick={() => setVisible(false)}
          >
            {item?.name}
          </Link>
        );
      })}
    </div>
  );
};

export default MenuItemSmallScreen;
