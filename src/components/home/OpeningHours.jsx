import videoOpening from "../../assets/OpeningVideo.mp4";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import thongke1 from "../../assets/statistic/thong_ke1.webp";
import thongke2 from "../../assets/statistic/thong_ke2.webp";
import thongke3 from "../../assets/statistic/thong_ke3.webp";
import thongke4 from "../../assets/statistic/thong_ke4.webp";
const OpeningHours = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-bgPrimary py-10 lg:pt-32">
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
        {/* Thong ke */}
        <div className="statistic flex flex-row flex-wrap pb-10 pt-10 text-primary">
          <div className="mb-2 flex w-1/2 flex-col items-center justify-center gap-2 border-r border-solid px-3 md:w-1/4">
            <img src={thongke1} alt="" />
            <span className="num text-3xl font-semibold md:text-5xl">2+</span>
            <span className="title sm:tex-3xl text-center text-2xl font-medium">
              Cửa hàng
            </span>
          </div>
          <div className="mb-2 flex w-1/2 flex-col items-center justify-center gap-2 border-solid px-3 sm:border-r md:w-1/4">
            <img src={thongke2} alt="" />
            <span className="num text-3xl font-semibold md:text-5xl">20+</span>
            <span className="title sm:tex-3xl text-center text-2xl font-medium">
              Nhân viên
            </span>
          </div>
          <div className="mb-2 flex w-1/2 flex-col items-center justify-center gap-2 border-r border-solid px-3 md:w-1/4">
            <img src={thongke3} alt="" />
            <span className="num text-3xl font-semibold md:text-5xl">200+</span>
            <span className="title sm:tex-3xl text-center text-2xl font-medium">
              Khách hàng
            </span>
          </div>
          <div className="mb-2 flex w-1/2 flex-col items-center justify-center gap-2 px-3 md:w-1/4">
            <img src={thongke4} alt="" />
            <span className="num text-3xl font-semibold md:text-5xl">50+</span>
            <span className="title sm:tex-3xl text-center text-2xl font-medium">
              Món ăn
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OpeningHours;
