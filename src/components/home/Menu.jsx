import monchinh from "../../assets/menu/monchinh.jpg";
import khaivi from "../../assets/menu/khaivi.jpg";
import mi from "../../assets/menu/mi.jpg";
import sup from "../../assets/menu/sup.jpg";
import trangmieng from "../../assets/menu/trangmieng.jpg";
import nuoc from "../../assets/menu/nuoc.jpg";
import { GiKnifeFork } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import MenuItem from "./MenuItem";
const Menu = () => {
  const { t } = useTranslation();
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
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </div>
  );
};
export default Menu;
