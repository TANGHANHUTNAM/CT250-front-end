import { useMemo, useState } from "react";
import CostMenu from "./CostMenu";
import DishCategories from "./DishCategories";
import YourSelection from "./YourSelection";
import _ from "lodash";

const defaultCosts = {
  1: {
    id: 1,
    label: "Dưới 100.000đ",
    value: "<100000",
    checked: false,
  },
  2: {
    id: 2,
    label: "Từ 100.000đ - 200.000đ",
    value: "100000 - 200000",
    checked: false,
  },
  3: {
    id: 3,
    label: "Từ 200.000đ - 500.000đ",
    value: "200000 - 500000",
    checked: false,
  },
  4: {
    id: 4,
    label: "Từ 500.000đ - 1 triệu",
    value: "500000 - 1000000",
    checked: false,
  },
  5: {
    id: 5,
    label: "Trên 1 triệu",
    value: ">1000000",
    checked: false,
  },
};

const MenuSideBar = () => {
  const [costs, setCosts] = useState(defaultCosts);

  const handleSelectCost = (checked, id) => {
    const newCosts = _.cloneDeep(costs);
    newCosts[id].checked = checked;
    setCosts(newCosts);
  };

  const handleClearAll = () => {
    const cloneCosts = _.cloneDeep(costs);
    Object.entries(costs).forEach(
      ([key, value]) => (cloneCosts[value.id].checked = false),
    );
    setCosts(cloneCosts);
  };

  const handleRemoveChoice = (choice) => {
    const newCosts = _.cloneDeep(costs);
    newCosts[choice.id].checked = false;
    setCosts(newCosts);
  };

  const isVisibleSelection = useMemo(() => {
    const selectedArr = Object.values(costs);
    for (let i = 0; i < selectedArr.length; i++) {
      if (selectedArr[i].checked === true) {
        return true;
      }
    }

    return false;
  }, [costs]);

  return (
    <div className="space-y-6">
      <DishCategories />
      {isVisibleSelection && (
        <YourSelection
          costs={costs}
          handleClearAll={handleClearAll}
          handleRemoveChoice={handleRemoveChoice}
        />
      )}
      <CostMenu costs={costs} handleSelectCost={handleSelectCost} />
    </div>
  );
};

export default MenuSideBar;
