import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  const [showBackTop, setShowBackTop] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setShowBackTop(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showBackTop && (
        <div
          className="back-top fixed bottom-16 right-10 z-50 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-tertiary text-xl text-white hover:bg-yellow-600"
          onClick={() =>
            scroll.scrollToTop({ duration: 400, smooth: "linear" })
          }
        >
          <IoIosArrowUp />
        </div>
      )}
    </>
  );
};

export default BackToTop;
