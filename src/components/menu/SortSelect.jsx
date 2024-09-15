import { useEffect } from "react";
import { FaSort } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSortDown, BiSortUp, BiSortAZ, BiSortZA } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const sorts = [
  {
    label: "Mặc định",
    value: "default",
    icon: <FaSort />,
    trans: "DishMenuSidebar.sort.default",
  },
  {
    label: "Tên A - Z",
    value: "a-z",
    icon: <BiSortAZ />,
    trans: "DishMenuSidebar.sort.a-z",
  },
  {
    label: "Tên Z - A",
    value: "z-a",
    icon: <BiSortZA />,
    trans: "DishMenuSidebar.sort.z-a",
  },
  {
    label: "Giá tăng dần",
    value: "asc-price",
    icon: <BiSortUp />,
    trans: "DishMenuSidebar.sort.ascPrice",
  },
  {
    label: "Giá giảm dần",
    value: "desc-price",
    icon: <BiSortDown />,
    trans: "DishMenuSidebar.sort.descPrice",
  },
  {
    label: "Món ăn mới nhất",
    value: "new",
    icon: <BiSortUp />,
    trans: "DishMenuSidebar.sort.newestDish",
  },
  {
    label: "Món ăn cũ nhất",
    value: "old",
    icon: <BiSortDown />,
    trans: "DishMenuSidebar.sort.oldestDish",
  },
];

const SortSelect = ({ selectedOption = {}, setSelectedOption = () => {} }) => {
  useEffect(() => {
    setSelectedOption(sorts[0]);
  }, []);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  const { t } = useTranslation();

  return (
    <div className="group relative min-w-52">
      <div className="flex cursor-pointer flex-nowrap items-center justify-between gap-4 rounded-md bg-tertiary p-2 text-primary">
        <div className="flex flex-nowrap items-center gap-2">
          <span>{selectedOption?.icon ?? <FaSort />}</span>
          <span className="text-sm font-medium">
            {t(selectedOption?.trans) === selectedOption.trans
              ? selectedOption.label
              : t(selectedOption?.trans)}
          </span>
        </div>
        <span className="transition-transform duration-300 group-hover:rotate-180">
          <MdKeyboardArrowDown />
        </span>
      </div>
      <ul className="invisible absolute top-[110%] z-30 w-full scale-90 rounded-md bg-primary p-2 text-sm opacity-0 shadow-md transition-all duration-300 will-change-auto group-hover:visible group-hover:scale-100 group-hover:opacity-100">
        {sorts &&
          sorts.length > 0 &&
          sorts.map((sort, index) => {
            return (
              <li
                key={index}
                className={`cursor-pointer py-2 duration-300 hover:text-tertiary ${selectedOption?.value === sort.value ? "font-medium text-tertiary" : ""}`}
                onClick={() => handleOptionClick(sort)}
              >
                {t(sort?.trans) === sort.trans ? sort.label : t(sort?.trans)}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SortSelect;
