import videoOpening from "../../assets/OpeningVideo.mp4";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const OpeningHours = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-bgPrimary py-10 lg:py-32">
      <div className="mx-auto max-w-screen-xl">
        <div className="relative flex flex-col px-3 lg:flex-row lg:py-10">
          <video
            className="rounded-t-xl lg:w-2/3 lg:rounded-2xl"
            autoPlay
            muted
            loop
          >
            <source src={videoOpening} />
          </video>

          <div className="bottom-40 rounded-b-xl bg-bgTertiary text-primary lg:absolute lg:right-0 lg:mr-3 lg:h-auto lg:w-1/2 lg:rounded-2xl lg:p-10 xl:p-14">
            <h2 className="px-10 py-12 text-center text-4xl font-semibold uppercase text-tertiary lg:px-0 lg:pb-5 lg:pt-0 lg:text-4xl">
              {t("Home.OpeningHours.title")}
            </h2>
            <div className="flex h-auto flex-col gap-5 px-7 pb-7 font-medium lg:pb-0">
              <p className="font-semibold">{t("Home.OpeningHours.des")}</p>
              <div className="flex flex-col gap-2 lg:text-left">
                <div className="flex flex-col justify-between gap-1 sm:flex-row">
                  <p className="font-semibold">
                    {t("Home.OpeningHours.content_1")}
                  </p>
                  <p> {t("Home.OpeningHours.content_2")}</p>
                </div>
                <div className="flex flex-col justify-between gap-1 sm:flex-row">
                  <p className="font-semibold">
                    {t("Home.OpeningHours.content_3")}
                  </p>
                  <p>{t("Home.OpeningHours.content_4")}</p>
                </div>
                <p className="text-left font-semibold">
                  {t("Home.OpeningHours.content_5")}
                </p>
              </div>
              <span className="flex items-center">
                <span className="mr-5 flex h-16 w-16 items-center justify-center rounded-full border border-solid border-tertiary bg-tertiary text-4xl">
                  <FaPhoneAlt />
                </span>
                <p className="font-semibold">
                  {t("Home.OpeningHours.content_6")}
                  <a className="text-tertiary" href="tel:0292 3831 530">
                    0292 3831 530
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OpeningHours;
