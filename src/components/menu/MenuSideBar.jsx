import CostMenu from "./CostMenu";
import DishCategories from "./DishCategories";
import YourSelection from "./YourSelection";

const MenuSideBar = () => {
  return (
    <div className="space-y-6">
      <DishCategories />
      <YourSelection />
      <CostMenu />
    </div>
  );
};

export default MenuSideBar;
