import monchinh from "../../assets/menu/monchinh.jpg";
const MenuItem = () => {
  return (
    <div className="group w-full p-3">
      <div className="img relative cursor-pointer overflow-hidden">
        <img
          className="duration-300 group-hover:scale-105"
          src={monchinh}
          alt="monchinh"
        />
        <div className="absolute bottom-6 mx-auto w-full text-center">
          <button className="w-fit bg-tertiary px-3 py-2 text-xl font-bold group-hover:bg-yellow-600">
            Món chính
          </button>
        </div>
      </div>
      <div className="des mt-5 text-center text-sm font-medium">
        Trải nghiệm món chính hấp dẫn với các lựa chọn phong phú đa dạng từ
        nguyên liệu khác nhau, chế biến tỉ mỉ bởi đầu bếp tài ba
      </div>
    </div>
  );
};

export default MenuItem;
