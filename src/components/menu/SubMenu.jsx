import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SubMenu = ({ menuItem = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <NavLink
        to={`/dish/${menuItem?._id}`}
        className="flex cursor-pointer flex-nowrap items-center justify-between py-2 font-medium hover:text-tertiary"
      >
        <div className="text-sm">{menuItem?.name}</div>
        {menuItem?.subMenu?.length > 0 && (
          <span
            className={`cursor-pointer text-xl transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
            onClick={(e) => toggleMenu(e)}
          >
            <MdOutlineKeyboardArrowDown />
          </span>
        )}
      </NavLink>
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
              <NavLink
                to={`/dish/${menu?._id}`}
                key={menu?._id}
                className="block cursor-pointer py-2 text-sm text-primary hover:font-medium hover:text-tertiary"
              >
                {menu?.name}
              </NavLink>
            );
          })}
      </motion.div>
    </div>
  );
};

export default SubMenu;
