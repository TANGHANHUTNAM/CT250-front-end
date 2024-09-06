import monchinh from "../../assets/menu/monchinh.jpg";
import khaivi from "../../assets/menu/khaivi.jpg";
import mi from "../../assets/menu/mi.jpg";
import sup from "../../assets/menu/sup.jpg";
import trangmieng from "../../assets/menu/trangmieng.jpg";
import nuoc from "../../assets/menu/nuoc.jpg";
import { GiKnifeFork } from "react-icons/gi";
import { useTranslation } from "react-i18next";
const Menu = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-bgPrimary p-10">
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
        {/* Items */}
        <div className="flex flex-col md:flex-row">
          {/* item */}
          <div className="group w-full flex-1 p-3 md:w-1/3">
            <div className="img relative cursor-pointer overflow-hidden">
              <img
                className="duration-300 group-hover:scale-105"
                src={monchinh}
                alt="monchinh"
              />
              <div className="absolute bottom-6 mx-auto w-full text-center">
                <button className="w-fit bg-tertiary px-3 py-2 text-xl font-bold group-hover:bg-yellow-600">
                  {t("Home.Menu.button1")}
                </button>
              </div>
            </div>
            <div className="des mt-5 text-center text-sm font-medium">
              {t("Home.Menu.des1")}
            </div>
          </div>
          <div className="group w-full flex-1 p-3 md:w-1/3">
            <div className="img relative cursor-pointer overflow-hidden">
              <img
                className="duration-300 group-hover:scale-105"
                src={khaivi}
                alt=""
              />
              <div className="absolute bottom-6 mx-auto w-full text-center">
                <button className="w-fit bg-tertiary px-3 py-2 text-xl font-bold group-hover:bg-yellow-600">
                  {t("Home.Menu.button2")}
                </button>
              </div>
            </div>
            <div className="des mt-5 text-center text-sm font-medium">
              {t("Home.Menu.des2")}
            </div>
          </div>
          <div className="group w-full flex-1 p-3 md:w-1/3">
            <div className="img relative cursor-pointer overflow-hidden">
              <img
                className="duration-300 group-hover:scale-105"
                src={mi}
                alt=""
              />
              <div className="absolute bottom-6 mx-auto w-full text-center">
                <button className="w-fit bg-tertiary px-3 py-2 text-xl font-bold group-hover:bg-yellow-600">
                  {t("Home.Menu.button3")}
                </button>
              </div>
            </div>
            <div className="des mt-5 text-center text-sm font-medium">
              {t("Home.Menu.des3")}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* item */}
          <div className="group w-full flex-1 p-3 md:w-1/3">
            <div className="img relative cursor-pointer overflow-hidden">
              <img
                className="duration-300 group-hover:scale-105"
                src={sup}
                alt=""
              />
              <div className="absolute bottom-6 mx-auto w-full text-center">
                <button className="w-fit bg-tertiary px-3 py-2 text-xl font-bold group-hover:bg-yellow-600">
                  {t("Home.Menu.button4")}
                </button>
              </div>
            </div>
            <div className="des mt-5 text-center text-sm font-medium">
              {t("Home.Menu.des4")}
            </div>
          </div>
          <div className="group w-full flex-1 p-3 md:w-1/3">
            <div className="img relative cursor-pointer overflow-hidden">
              <img
                className="duration-300 group-hover:scale-105"
                src={trangmieng}
                alt=""
              />
              <div className="absolute bottom-6 mx-auto w-full text-center">
                <button className="w-fit bg-tertiary px-3 py-2 text-xl font-bold group-hover:bg-yellow-600">
                  {t("Home.Menu.button5")}
                </button>
              </div>
            </div>
            <div className="des mt-5 text-center text-sm font-medium">
              {t("Home.Menu.des5")}
            </div>
          </div>
          <div className="group w-full flex-1 p-3 md:w-1/3">
            <div className="img relative cursor-pointer overflow-hidden">
              <img
                className="duration-300 group-hover:scale-105"
                src={nuoc}
                alt=""
              />
              <div className="absolute bottom-6 mx-auto w-full text-center">
                <button className="w-fit bg-tertiary px-3 py-2 text-xl font-bold group-hover:bg-yellow-600">
                  {t("Home.Menu.button6")}
                </button>
              </div>
            </div>
            <div className="des mt-5 text-center text-sm font-medium">
              {t("Home.Menu.des6")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
