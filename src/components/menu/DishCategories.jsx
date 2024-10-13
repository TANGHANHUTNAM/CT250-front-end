import "./Menu.css";
import { useTranslation } from "react-i18next";
import MenuLayout from "./MenuLayout";
import SubMenu from "./SubMenu";
import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";
import StatusCodes from "../../utils/StatusCodes";

const DishCategories = ({}) => {
  const { t } = useTranslation();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        setCategories(res.DT);
      }
    };

    fetchCategories();
  }, []);

  return (
    <MenuLayout title={t("DishMenuSidebar.dishCategories")}>
      <div className="dish-menu bg-transparent px-4 py-3 text-primary">
        {categories &&
          categories.length > 0 &&
          categories.map((category) => {
            const { subCategories } = category;
            delete categories.subCategories;
            category.subMenu = subCategories;

            return <SubMenu key={category?._id} menuItem={category} />;
          })}
      </div>
    </MenuLayout>
  );
};

export default DishCategories;
