import MenuLayout from "./MenuLayout";
import Checkbox from "../inputs/Checkbox";

const costs = [
  {
    id: 1,
    label: "Dưới 100.000đ",
    value: "<100000",
  },
  {
    id: 2,
    label: "Từ 100.000đ - 200.000đ",
    value: "100000 - 200000",
  },
  {
    id: 3,
    label: "Từ 200.000đ - 500.000đ",
    value: "200000 - 500000",
  },
  {
    id: 4,
    label: "Từ 500.000đ - 1 triệu",
    value: "500000 - 1000000",
  },
  {
    id: 5,
    label: "Trên 1 triệu",
    value: ">1000000",
  },
];

const CostMenu = ({ selectedCosts = {}, handleSelectCost = () => {} }) => {
  return (
    <MenuLayout title="Chọn mức giá">
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
                  {cost?.label}
                </label>
              </li>
            );
          })}
      </ul>
    </MenuLayout>
  );
};

export default CostMenu;
