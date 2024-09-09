import MenuLayout from "./MenuLayout";
import { HiMiniXMark } from "react-icons/hi2";
import { FaCircleXmark } from "react-icons/fa6";

const choices = [
  {
    label: "Dưới 100.000đ",
    value: "<100000",
  },
  {
    label: "Từ 100.000đ đến 200.000đ",
    value: "100000 - 200000",
  },
  {
    label: "Từ 200.000đ đến 500.000đ",
    value: "200000 - 500000",
  },
  {
    label: "Từ 500.000đ đến 1 triệu",
    value: "500000 - 1000000",
  },

  {
    label: "Trên 1 triệu",
    value: ">1000000",
  },
];

const YourSelection = ({}) => {
  const handleClearAll = () => {};

  const handleRemoveChoice = (choice) => {
    console.log(choice);
  };

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
          {choices &&
            choices.length > 0 &&
            choices.map((choice, index) => {
              return (
                <li
                  key={index}
                  className="flex w-fit flex-nowrap items-center justify-center gap-2 rounded-md bg-primary px-3 py-2"
                >
                  <span className="select-none text-sm font-medium text-tertiary">
                    {choice?.label}
                  </span>
                  <span
                    className="cursor-pointer text-gray-500 hover:text-tertiary"
                    onClick={() => handleRemoveChoice(choice)}
                  >
                    <HiMiniXMark />
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </MenuLayout>
  );
};

export default YourSelection;
