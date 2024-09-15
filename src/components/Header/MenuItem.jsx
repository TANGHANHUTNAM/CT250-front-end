import { MdOutlineArrowDropDown } from "react-icons/md";

const MenuItem = ({ menuItem }) => {
  return (
    <>
      <span className="text-lg transition-transform duration-500 group-hover:rotate-180">
        <MdOutlineArrowDropDown />
      </span>
      <div className="absolute top-6 hidden w-[230px] scale-90 rounded-sm border border-solid border-tertiary bg-bgPrimary/85 px-6 py-2 opacity-0 shadow-lg transition-all duration-300 will-change-transform sm:invisible sm:block sm:group-hover:visible sm:group-hover:scale-100 sm:group-hover:opacity-100">
        {menuItem.map((item, index) => {
          return (
            <div key={index}>
              <span className="nav-link-name my-4 flex flex-col items-start font-bold text-white/90 duration-300 hover:pl-3 hover:text-tertiary">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuItem;
