import { useDynamicTitle, useTopPage } from "../hooks";
import { Image } from "antd";
import { FaStar } from "react-icons/fa";
import QuantityInput from "../components/inputs/QuantityInput";

const DishDetailPage = () => {
  useDynamicTitle("Chi tiết món ăn"); // Tiêu đề động: sẽ được thay đổi theo tên món ăn
  // const { t } = useTranslation();
  // useDynamicTitle(t("BreadcrumbsAndTitle.contact"));
  useTopPage();

  return (
    <div className="w-full bg-bgPrimary">
      <div className="mx-auto max-w-screen-xl md:px-3">
        <div className="flex flex-col gap-4 py-2 text-primary sm:flex-row">
          <div className="grow">
            <div className="flex w-full flex-col gap-4 rounded-sm bg-bgTertiary px-4 py-5 md:px-8 lg:flex-row lg:gap-10 lg:px-6 lg:py-6">
              <div className="flex w-full justify-center pb-1 lg:w-fit">
                <div className="sr-530:h-72 h-60 xl:h-80">
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
                  <div className="sr-530:w-4/5 sr-530:gap-4 flex w-full gap-2 sm:w-auto md:w-4/5">
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
          </div>
          <div className="w-full rounded-sm bg-bgTertiary sm:w-56">
            <p className="px-4 pt-4 text-base font-medium">
              Tonatra giới thiệu
            </p>
            <div className="divide-y divide-solid divide-white/20">
              <div className="flex gap-4 p-4 sm:flex-col sm:gap-2">
                <img
                  src="https://bizweb.dktcdn.net/thumb/medium/100/469/097/products/1c8da310231574e189b9012e3125a3.jpg?v=1667881665957"
                  loading="lazy"
                  className="w-20 rounded-sm object-contain sm:w-fit"
                />
                <div className="grow space-y-1 overflow-hidden text-sm">
                  <p className="truncate font-semibold">Dương chi cam lộ</p>
                  <p className="font-medium text-tertiary">55.000đ</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 sm:flex-col sm:gap-2">
                <img
                  src="https://bizweb.dktcdn.net/thumb/medium/100/469/097/products/1c8da310231574e189b9012e3125a3.jpg?v=1667881665957"
                  loading="lazy"
                  className="w-20 rounded-sm object-contain sm:w-fit"
                />
                <div className="grow space-y-1 overflow-hidden text-sm">
                  <p className="font-semibold">Dương chi cam lộ</p>
                  <p className="font-medium text-tertiary">55.000đ</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 sm:flex-col sm:gap-2">
                <img
                  src="https://bizweb.dktcdn.net/thumb/medium/100/469/097/products/1c8da310231574e189b9012e3125a3.jpg?v=1667881665957"
                  loading="lazy"
                  className="w-20 rounded-sm object-contain sm:w-fit"
                />
                <div className="grow space-y-1 overflow-hidden text-sm">
                  <p className="font-semibold">Dương chi cam lộ</p>
                  <p className="font-medium text-tertiary">55.000đ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetailPage;
