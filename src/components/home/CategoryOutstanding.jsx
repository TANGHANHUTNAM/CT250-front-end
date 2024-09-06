import { GiKnifeFork } from "react-icons/gi";
import img1 from "../../assets/category/cate_1.webp";
import img2 from "../../assets/category/cate_2.webp";
import img3 from "../../assets/category/cate_3.webp";
import img4 from "../../assets/category/cate_4.webp";
import img5 from "../../assets/category/cate_5.webp";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
const CategoryOutstanding = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    const step = 10;
    const interval = 10;
    const distance = 450;
    let scrolled = 0;

    const scrollStep = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: direction * step,
          behavior: "auto",
        });
        scrolled += step;
        if (scrolled < distance) {
          setTimeout(scrollStep, interval);
        }
      }
    };

    scrollStep();
  };

  const handleLeft = () => scroll(-1);
  const handleRight = () => scroll(1);
  return (
    <div className="bg-bgTertiary px-3">
      <div className="mr- mx-auto max-w-screen-xl py-12 text-primary">
        {/* Title */}
        <div className="title mb-7 flex flex-row items-center justify-center">
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <GiKnifeFork />
          </span>
          <p className="px-5 font-dancingscript text-3xl font-semibold md:text-5xl">
            {t("Home.CategoryOutstanding.title")}
          </p>
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <GiKnifeFork />
          </span>
        </div>
        {/* Content */}
        <div className="content flex flex-col px-10">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
            className="flex max-w-screen-sm flex-row gap-5 overflow-hidden sm:max-w-full"
          >
            {/* item */}
            <div className="item group min-w-fit flex-1 border border-solid p-7 hover:border-tertiary hover:duration-300 sm:min-w-[380px]">
              {/* img */}
              <div className="img flex justify-center overflow-hidden">
                <img
                  className="duration-300 group-hover:scale-105"
                  src={img1}
                  alt=""
                />
              </div>
              {/* des */}
              <div className="des text-center">
                <p className="py-4 text-2xl font-semibold group-hover:text-tertiary">
                  {" "}
                  {t("Home.CategoryOutstanding.content-1")}
                </p>
                <p className="text-base font-medium">
                  {t("Home.CategoryOutstanding.des1")}
                </p>
              </div>
            </div>
            <div className="item group min-w-fit flex-1 border border-solid p-7 hover:border-tertiary hover:duration-300 sm:min-w-[380px]">
              {/* img */}
              <div className="img flex justify-center overflow-hidden">
                <img
                  className="duration-300 group-hover:scale-105"
                  src={img2}
                  alt=""
                />
              </div>
              {/* des */}
              <div className="des text-center">
                <p className="py-4 text-2xl font-semibold group-hover:text-tertiary">
                  {" "}
                  {t("Home.CategoryOutstanding.content-2")}
                </p>
                <p className="text-base font-medium">
                  {t("Home.CategoryOutstanding.des2")}
                </p>
              </div>
            </div>
            <div className="item group min-w-fit flex-1 border border-solid p-7 hover:border-tertiary hover:duration-300 sm:min-w-[380px]">
              {/* img */}
              <div className="img flex justify-center overflow-hidden">
                <img
                  className="duration-300 group-hover:scale-105"
                  src={img3}
                  alt=""
                />
              </div>
              {/* des */}
              <div className="des text-center">
                <p className="py-4 text-2xl font-semibold group-hover:text-tertiary">
                  {" "}
                  {t("Home.CategoryOutstanding.content-3")}
                </p>
                <p className="text-base font-medium">
                  {t("Home.CategoryOutstanding.des3")}
                </p>
              </div>
            </div>
            <div className="item group min-w-fit flex-1 border border-solid p-7 hover:border-tertiary hover:duration-300 sm:min-w-[380px]">
              {/* img */}
              <div className="img flex justify-center overflow-hidden">
                <img
                  className="duration-300 group-hover:scale-105"
                  src={img4}
                  alt=""
                />
              </div>
              {/* des */}
              <div className="des text-center">
                <p className="py-4 text-2xl font-semibold group-hover:text-tertiary">
                  {" "}
                  {t("Home.CategoryOutstanding.content-4")}
                </p>
                <p className="text-base font-medium">
                  {t("Home.CategoryOutstanding.des4")}
                </p>
              </div>
            </div>
            <div className="item group min-w-fit flex-1 border border-solid p-7 hover:border-tertiary hover:duration-300 sm:min-w-[380px]">
              {/* img */}
              <div className="img flex justify-center overflow-hidden">
                <img
                  className="duration-300 group-hover:scale-105"
                  src={img5}
                  alt=""
                />
              </div>
              {/* des */}
              <div className="des text-center">
                <p className="py-4 text-2xl font-semibold group-hover:text-tertiary">
                  {" "}
                  {t("Home.CategoryOutstanding.content-5")}
                </p>
                <p className="text-base font-medium">
                  {t("Home.CategoryOutstanding.des5")}
                </p>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="mt-8 flex flex-row items-center justify-center gap-10 text-4xl text-tertiary sm:text-5xl">
            <span onClick={handleLeft} className="back-left cursor-pointer">
              <MdKeyboardDoubleArrowLeft />
            </span>
            <span onClick={handleRight} className="back-right cursor-pointer">
              <MdKeyboardDoubleArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryOutstanding;
