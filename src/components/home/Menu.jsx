import { GiKnifeFork } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";
import { getCategoriesAtOneLevel } from "../../services/categoryService";
import StatusCodes from "../../utils/StatusCodes";

const Menu = () => {
  const { t } = useTranslation();

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchCategoriesAtLevelOne = async () => {
      const res = await getCategoriesAtOneLevel();

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        setMenus(res.DT);
      }

      if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
        setMenus([]);
      }
    };

    fetchCategoriesAtLevelOne();
  }, []);

  return (
    <div className="bg-bgPrimary px-2 py-6 sm:p-10">
      <div className="mx-auto max-w-screen-xl px-3 text-primary">
        {/* title */}
        <div className="title mb-7 flex flex-row items-center justify-center">
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <GiKnifeFork />
          </span>
          <p className="px-5 text-center font-dancingscript text-3xl font-semibold md:text-5xl">
            {t("Home.Menu.title")}
          </p>
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <GiKnifeFork />
          </span>
        </div>
        {/* des */}
        <div className="mb-5 text-center text-sm font-light md:px-20 md:text-base">
          {t("Home.Menu.des")}
        </div>
        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {menus &&
            menus.length > 0 &&
            menus.map((item) => {
              return <MenuItem key={item._id} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Menu;
