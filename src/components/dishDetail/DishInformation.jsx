import { Image } from "antd";
import { FaStar } from "react-icons/fa";
import QuantityInput from "../inputs/QuantityInput";

const DishInformation = ({}) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-sm bg-bgTertiary px-4 py-5 md:px-8 lg:flex-row lg:gap-10 lg:px-6 lg:py-6">
      <div className="flex w-full justify-center pb-1 lg:w-fit">
        <div className="h-60 sr-530:h-72 xl:h-80">
          <Image
            src="https://bizweb.dktcdn.net/thumb/large/100/469/097/products/untitled1-1.jpg?v=1667882668260"
            loading="lazy"
            className="object-contain"
          />
        </div>
      </div>
      <div className="grow space-y-10">
        <div className="flex flex-col gap-4">
          <div className="text-xl sm:text-2xl md:font-dancingscript md:text-4xl xl:text-5xl">
            Salad rau mùa sốt cam
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center gap-0.5 border-x-2 border-solid border-yellow-500 bg-yellow-200 px-2 py-1 text-yellow-600">
              <FaStar />
              <span className="ml-1 text-xs font-bold">4.5</span>
            </span>
            <div className="text-xs sm:text-sm">
              <span className="font-semibold">1.2K</span>
              <span className="ms-1">đã bán</span>
            </div>
          </div>
          <div className="space-x-2.5">
            <span className="text-2xl font-semibold text-tertiary">
              79.000đ
            </span>
            <span className="text-base text-slate-300 line-through">
              82.000đ
            </span>
            <span className="rounded-md bg-red-500 px-1.5 py-1 text-sm font-medium">
              -20%
            </span>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <span className="text-sm">Số lượng</span>
            <QuantityInput />
          </div>
          <div className="flex w-full gap-2 sr-530:w-4/5 sr-530:gap-4 sm:w-auto md:w-4/5">
            <button className="grow rounded-md bg-tertiary px-4 py-2.5 text-sm font-medium hover:bg-yellow-600">
              Thêm vào giỏ hàng
            </button>
            <button className="grow rounded-md bg-yellow-600 px-4 py-2.5 text-sm font-medium hover:bg-tertiary">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishInformation;
