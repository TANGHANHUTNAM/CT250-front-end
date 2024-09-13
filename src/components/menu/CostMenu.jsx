import MenuLayout from "./MenuLayout";
import Checkbox from "../inputs/Checkbox";
import { useTranslation } from "react-i18next";

const costs = [
  {
    id: 1,
    label: "Dưới 100.000đ",
    value: "<100000",
    trans: "DishMenuSidebar.costs.<100000",
  },
  {
    id: 2,
    label: "Từ 100.000đ - 200.000đ",
    value: "100000 - 200000",
    trans: "DishMenuSidebar.costs.100000-200000",
  },
  {
    id: 3,
    label: "Từ 200.000đ - 500.000đ",
    value: "200000 - 500000",
    trans: "DishMenuSidebar.costs.200000-500000",
  },
  {
    id: 4,
    label: "Từ 500.000đ - 1 triệu",
    value: "500000 - 1000000",
    trans: "DishMenuSidebar.costs.500000-1tr",
  },
  {
    id: 5,
    label: "Trên 1 triệu",
    value: ">1000000",
    trans: "DishMenuSidebar.costs.>1tr",
  },
];

const CostMenu = ({ selectedCosts = {}, handleSelectCost = () => {} }) => {
  const { t } = useTranslation();

  return (
    <MenuLayout title={t("DishMenuSidebar.choosePrice")}>
      <ul className="bg-transparent px-4 py-3 text-primary">
        {costs &&
          costs.length > 0 &&
          costs.map((cost, index) => {
            return (
              <li
                key={index}
                className="flex flex-nowrap items-center gap-3 py-2"
              >
                <Checkbox
                  id={`filter-cost-${cost?.value}`}
                  value={cost?.value}
                  onChange={(e) => handleSelectCost(e.target.checked, cost)}
                  checked={selectedCosts[cost.id] !== undefined}
                />
                <label
                  htmlFor={`filter-cost-${cost?.value}`}
                  className="select-none text-sm font-medium"
                >
                  {t(cost?.trans) === cost.trans ? cost?.label : t(cost?.trans)}
                </label>
              </li>
            );
          })}
      </ul>
    </MenuLayout>
  );
};

export default CostMenu;
