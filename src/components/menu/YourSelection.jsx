import MenuLayout from "./MenuLayout";
import { HiMiniXMark } from "react-icons/hi2";
import { FaCircleXmark } from "react-icons/fa6";

const YourSelection = ({ costs, handleClearAll, handleRemoveChoice }) => {
  return (
    <MenuLayout title="Bạn chọn">
      <div className="bg-transparent px-4 py-3">
        <div
          className="mb-3 flex w-fit cursor-pointer select-none flex-nowrap items-center gap-2 text-base font-semibold text-tertiary hover:text-primary"
          onClick={() => handleClearAll()}
        >
          <span>Bỏ hết</span> <FaCircleXmark />
        </div>
        <ul className="space-y-3">
          {costs &&
            Object.entries(costs).length > 0 &&
            Object.entries(costs).map(([key, cost], index) => {
              if (cost?.checked == true) {
                return (
                  <li
                    key={index}
                    className="flex w-fit flex-nowrap items-center justify-center gap-2 rounded-md bg-primary px-3 py-2"
                  >
                    <span className="select-none text-sm font-medium text-tertiary">
                      {cost?.label}
                    </span>
                    <span
                      className="cursor-pointer text-gray-500 hover:text-tertiary"
                      onClick={() => handleRemoveChoice(cost)}
                    >
                      <HiMiniXMark />
                    </span>
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </MenuLayout>
  );
};

export default YourSelection;
