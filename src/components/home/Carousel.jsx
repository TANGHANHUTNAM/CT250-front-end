import React, { useEffect, useRef } from "react";
import video from "../../assets/video-bg.mp4";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const { t } = useTranslation();
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div ref={carouselRef} className="carousel-container relative">
      <video className="video w-full" autoPlay muted loop>
        <source src={video} />
      </video>
      <div className="absolute top-1/4 mx-auto flex w-full flex-col gap-3 text-center text-primary sm:top-1/3">
        <span className="font-dancingscript text-2xl font-extrabold sm:text-6xl">
          Tonatra Restaurant
        </span>
        <span className="text-xs font-semibold sm:text-lg">
          {t("Carousel.des")}
        </span>
        <span className="mt-2">
          <Link
            className="w-fit rounded-lg bg-tertiary px-1 py-2 text-sm font-semibold uppercase text-white hover:bg-yellow-600 sm:px-2 sm:py-3"
            to="/booking"
          >
            {t("Carousel.button")}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Carousel;
