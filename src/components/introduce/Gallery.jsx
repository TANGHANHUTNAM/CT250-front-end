import { Image } from "antd";
import "./Gallery.css";
import img01 from "../../assets/gallery/img01.jpg";
import img02 from "../../assets/gallery/img02.jpg";
import img03 from "../../assets/gallery/img03.jpg";
import img04 from "../../assets/gallery/img04.jpg";
import img05 from "../../assets/gallery/img05.jpg";
import img06 from "../../assets/gallery/img06.jpg";
import img07 from "../../assets/gallery/img07.jpg";
import img08 from "../../assets/gallery/img08.jpg";
import img09 from "../../assets/gallery/img09.jpg";
import img10 from "../../assets/gallery/img10.jpg";
const Gallery = () => {
  return (
    <div className="gallery-container text-primary">
      <div className="content-title relative mb-5 text-center">
        <p className="py-4 text-4xl font-medium uppercase">
          Thư viện ảnh
          <span className="absolute bottom-0 left-0 right-0 mx-auto box-border w-[100px] border-b-[6px] border-double"></span>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 object-cover sm:grid-cols-2 md:grid-cols-5">
        <div className="h-full w-full">
          <Image src={img01} />
        </div>
        <div className="h-full w-full">
          <Image src={img02} />
        </div>
        <div className="h-full w-full">
          <Image src={img03} />
        </div>
        <div className="h-full w-full">
          <Image src={img04} />
        </div>
        <div className="h-full w-full">
          <Image src={img05} />
        </div>
        <div className="h-full w-full">
          <Image src={img06} />
        </div>
        <div className="h-full w-full">
          <Image src={img07} />
        </div>
        <div className="h-full w-full">
          <Image src={img08} />
        </div>
        <div className="h-full w-full">
          <Image src={img09} />
        </div>
        <div className="h-full w-full">
          <Image src={img10} />
        </div>
      </div>
      <p className="mt-5 font-semibold uppercase italic">
        HÃY ĐẾN TONATRA RESTAURANT ĐỂ THƯỞNG THỨC NGAY BẠN NHÉ!
      </p>
    </div>
  );
};

export default Gallery;
