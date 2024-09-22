import { Image } from "antd";
import "./Gallery.css";
import images from "../../assets/gallery";

import { useTranslation } from "react-i18next";
const Gallery = () => {
  const { t } = useTranslation();
  console.log(images);
  return (
    <div className="gallery-container text-primary">
      <div className="content-title relative mb-5 text-center">
        <p className="py-4 text-4xl font-medium uppercase">
          {t("Introduce.title_gallery")}
          <span className="absolute bottom-0 left-0 right-0 mx-auto box-border w-[100px] border-b-[6px] border-double"></span>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 object-cover sm:grid-cols-2 md:grid-cols-5">
        {images.map((img, index) => {
          return (
            <div key={index} className="h-full w-full">
              <Image src={img} />
            </div>
          );
        })}
      </div>
      <p className="mt-5 font-semibold uppercase italic">
        {t("Introduce.content_footer")}
      </p>
    </div>
  );
};

export default Gallery;
