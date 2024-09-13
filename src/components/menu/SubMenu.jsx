import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";

const SubMenu = ({ onClick = () => {}, menuItem = {}, selectedItem = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div
        className={`flex cursor-pointer flex-nowrap items-center justify-between py-2 font-medium hover:text-tertiary ${selectedItem.id === menuItem.id ? "font-semibold text-tertiary" : ""}`}
        onClick={() => onClick(menuItem)}
      >
        <div className="text-sm">{menuItem?.name}</div>
        <span
          className={`cursor-pointer text-xl transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
          onClick={(e) => toggleMenu(e)}
        >
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
            height: 0,
            transition: {
              opacity: { duration: 0.2 },
              height: { duration: 0.4 },
            },
          },
          visible: {
            opacity: 1,
            height: "auto",
            transition: {
              opacity: { duration: 0.2 },
              height: { duration: 0.4 },
            },
          },
        }}
        className="will-change-opacity overflow-hidden pl-6 will-change-transform"
      >
        {menuItem.subMenu &&
          menuItem.subMenu.length > 0 &&
          menuItem.subMenu.map((menu) => {
            return (
              <div
                key={menu?.id}
                className={`cursor-pointer py-2 text-sm text-primary hover:font-medium hover:text-tertiary ${selectedItem.id === menu.id ? "font-medium text-tertiary" : ""}`}
                onClick={() => onClick(menu)}
              >
                {menu?.name}
              </div>
            );
          })}
      </motion.div>
    </div>
  );
};

export default SubMenu;
