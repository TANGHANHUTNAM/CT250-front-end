import { Image } from "antd";
import { FaStar } from "react-icons/fa";
import QuantityInput from "../inputs/QuantityInput";
import { useTranslation } from "react-i18next";
import { formatCurrency, formatQuantity } from "../../utils/format";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducer/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const DishInformation = ({ dish }) => {
  const { t } = useTranslation();

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: dish._id, quantity }));
    toast.success("Add to cart successfully.");
  };

  return (
    <div className="flex w-full flex-col gap-4 rounded-sm bg-bgTertiary px-4 py-5 md:px-8 lg:flex-row lg:gap-10 lg:px-6 lg:py-6">
      <div className="flex w-full justify-center pb-1 lg:w-fit">
        <div className="h-60 w-60 sr-530:h-72 sr-530:w-72 xl:h-80 xl:w-80">
          <Image src={dish?.image} loading="lazy" className="object-contain" />
        </div>
      </div>
      <div className="grow space-y-10">
        <div className="flex flex-col gap-4">
          <div className="text-xl sm:text-2xl md:font-dancingscript md:text-4xl xl:text-5xl">
            {dish?.name}
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center gap-0.5 border-x-2 border-solid border-yellow-500 bg-yellow-200 px-2 py-1 text-yellow-600">
              <FaStar />
              <span className="ml-1 text-xs font-bold">
                {dish?.averageRating}
              </span>
            </span>
            <div className="text-xs sm:text-sm">
              <span className="font-semibold">
                {formatQuantity(dish?.totalSold)}
              </span>
              <span className="ms-1">{t("DishDetailPage.sold")}</span>
            </div>
          </div>
          <div className="space-x-2.5">
            <span className="text-2xl font-semibold text-tertiary">
              {formatCurrency(dish?.discountedPrice)}
            </span>
            {dish?.discount > 0 && (
              <>
                <span className="text-base text-slate-300 line-through">
                  {formatCurrency(dish?.price)}
                </span>
                <span className="rounded-md bg-red-500 px-1.5 py-1 text-sm font-medium">
                  -{dish?.discount}%
                </span>
              </>
            )}
          </div>
        </div>
        <div className="space-y-8">
          {dish?.isAvailibility ? (
            <>
              <div className="flex items-center gap-6">
                <span className="text-sm">{t("DishDetailPage.quantity")}</span>
                <QuantityInput
                  value={quantity}
                  onChange={(quantity) => setQuantity(quantity)}
                />
              </div>
              <div className="flex w-full gap-2 sr-530:w-4/5 sr-530:gap-4 sm:w-auto md:w-4/5">
                <button
                  className="grow rounded-md bg-tertiary px-2 py-2.5 text-sm font-medium hover:bg-yellow-600 sr-530:px-4"
                  onClick={() => handleAddToCart()}
                >
                  {t("DishDetailPage.addToCart")}
                </button>
                <Link
                  to="/booking"
                  className="grow rounded-md bg-yellow-600 px-2 py-2.5 text-center text-sm font-medium hover:bg-tertiary sr-530:px-4"
                >
                  {t("DishDetailPage.bookNow")}
                </Link>
              </div>
            </>
          ) : (
            <div className="py-2">
              <div className="rounded-md bg-[#fff3cd] px-4 py-3 text-sm font-medium text-yellow-600">
                {t("DishDetailPage.outOfDish")}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DishInformation;
