import MenuLayout from "./MenuLayout";
import Checkbox from "../inputs/Checkbox";

const CostMenu = ({ costs = {}, handleSelectCost = () => {} }) => {
  return (
    <MenuLayout title="Chọn mức giá">
      <ul className="bg-transparent px-4 py-3 text-primary">
        {costs &&
          Object.entries(costs).length > 0 &&
          Object.entries(costs).map(([key, cost], index) => {
            return (
              <li
                key={index}
                className="flex flex-nowrap items-center gap-3 py-2"
              >
                <Checkbox
                  id={`filter-cost-${cost?.value}`}
                  value={cost?.value}
                  onChange={(e) => handleSelectCost(e.target.checked, cost?.id)}
                  checked={cost?.checked}
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
