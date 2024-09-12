import { useEffect } from "react";
import { FaSort } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSortDown, BiSortUp, BiSortAZ, BiSortZA } from "react-icons/bi";

const sorts = [
  {
    label: "Mặc định",
    value: "default",
    icon: <FaSort />,
  },
  {
    label: "Tên A - Z",
    value: "a-z",
    icon: <BiSortAZ />,
  },
  {
    label: "Tên Z - A",
    value: "z-a",
    icon: <BiSortZA />,
  },
  {
    label: "Giá tăng dần",
    value: "asc-price",
    icon: <BiSortUp />,
  },
  {
    label: "Giá giảm dần",
    value: "desc-price",
    icon: <BiSortDown />,
  },
  {
    label: "Hàng mới nhất",
    value: "new",
    icon: <BiSortUp />,
  },
  {
    label: "Hàng cũ nhất",
    value: "old",
    icon: <BiSortDown />,
  },
];

const SortSelect = ({ selectedSort, setSelectedSort }) => {
  useEffect(() => {
    setSelectedSort(sorts[0]);
  }, []);

  const handleOptionClick = (value) => {
    setSelectedSort(value);
  };

  return (
    <div className="group relative min-w-40">
      <div className="flex cursor-pointer flex-nowrap items-center justify-between gap-4 rounded-md bg-tertiary p-2 text-primary">
        <div className="flex flex-nowrap items-center gap-2">
          <span>{selectedSort?.icon ?? <FaSort />}</span>
          <span className="text-sm font-medium">{selectedSort?.label}</span>
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
                className={`cursor-pointer py-2 duration-300 hover:text-tertiary ${selectedSort?.value === sort.value ? "font-medium text-tertiary" : ""}`}
                onClick={() => handleOptionClick(sort)}
              >
                {sort.label}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SortSelect;
