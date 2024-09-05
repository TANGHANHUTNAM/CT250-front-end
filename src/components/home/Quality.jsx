import { FaUserTie } from "react-icons/fa6";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaCartPlus } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
const Quality = () => {
  const { t } = useTranslation();
  return (
    <div className="quality bg-bgTertiary sm:py-10">
      <div className="mx-auto flex max-w-screen-xl flex-col px-3 py-10 text-primary sm:flex-row sm:flex-wrap">
        <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
          <div className="group flex h-full flex-col gap-3 bg-bgPrimary p-5 drop-shadow-2xl">
            <div className="icon text-5xl text-tertiary">
              <FaUserTie />
            </div>
            <span className="title text-xl font-semibold">
              {t("Home.Quality.title-1")}
            </span>
            <p className="des text-base font-extralight">
              {t("Home.Quality.content-1")}
            </p>
          </div>
        </div>
        <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
          <div className="flex h-full flex-col gap-3 bg-bgPrimary p-5 drop-shadow-2xl">
            <div className="icon text-5xl text-tertiary">
              <PiForkKnifeFill />
            </div>
            <span className="title text-xl font-semibold">
              {t("Home.Quality.title-2")}
            </span>
            <p className="des text-base font-extralight">
              {t("Home.Quality.content-2")}
            </p>
          </div>
        </div>
        <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
          <div className="flex h-full flex-col gap-3 bg-bgPrimary p-5 drop-shadow-2xl">
            <div className="icon text-5xl text-tertiary">
              <FaCartPlus />
            </div>
            <span className="title text-xl font-semibold">
              {t("Home.Quality.title-3")}
            </span>
            <p className="des text-base font-extralight">
              {t("Home.Quality.content-3")}
            </p>
          </div>
        </div>
        <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
          <div className="flex h-full flex-col gap-3 bg-bgPrimary p-5 drop-shadow-2xl">
            <div className="icon text-5xl text-tertiary">
              <RiCustomerService2Fill />
            </div>
            <span className="title text-xl font-semibold">
              {t("Home.Quality.title-4")}
            </span>
            <p className="des text-base font-extralight">
              {t("Home.Quality.content-4")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
