import { useTranslation } from "react-i18next";
import MenuLayout from "./MenuLayout";
import SubMenu from "./SubMenu";

const categories = [
  {
    id: 1,
    name: "Khai vị",
    subMenu: [
      { id: 1.1, name: "Salad" },
      { id: 1.2, name: "Gỏi" },
    ],
  },
  {
    id: 2,
    name: "Món chính",
    subMenu: [
      { id: 2.1, name: "Món bò" },
      { id: 2.2, name: "Món gà" },
      { id: 2.3, name: "Món heo" },
      { id: 2.4, name: "Món cá" },
    ],
  },
  {
    id: 3,
    name: "Bánh và tráng miệng",
    subMenu: [
      { id: 3.1, name: "Bánh" },
      { id: 3.2, name: "Tráng miệng" },
    ],
  },
  {
    id: 4,
    name: "Đồ uống",
    subMenu: [
      { id: 3.1, name: "Cafe" },
      { id: 3.2, name: "Trà sữa" },
    ],
  },
];

const DishCategories = ({
  selectedCategory = {},
  setSelectedCategory = () => {},
}) => {
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const { t } = useTranslation();

  return (
    <MenuLayout title={t("DishMenuSidebar.dishCategories")}>
      <div className="bg-transparent px-4 py-3 text-primary">
        {categories &&
          categories.length > 0 &&
          categories.map((category) => {
            return (
              <SubMenu
                key={category?.id}
                menuItem={category}
                onClick={handleSelectCategory}
                selectedItem={selectedCategory}
              />
            );
          })}
      </div>
    </MenuLayout>
  );
};

export default DishCategories;
