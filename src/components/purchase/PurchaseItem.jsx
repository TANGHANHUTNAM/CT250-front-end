import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import { ORDER_STATUS, PAYMENT_METHOD, PAYMENT_STATUS } from "../../constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducer/cartSlice";
import { createUrlPayment } from "../../services/orderService";
import StatusCodes from "../../utils/StatusCodes";
import { toast } from "react-toastify";

const PurchaseItem = ({ item = {}, handleCancelPurchase = (data) => {} }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/account/purchase/order/${item?._id}`);
  };

  const dispatch = useDispatch();
  const handleBuyAgain = async () => {
    const addCart = async () => {
      item?.dishes?.forEach((dish) => {
        dispatch(addToCart({ id: dish?._id, quantity: dish?.quantity }));
      });
    };
    await addCart();
    navigate("/cart");
  };

  const handlePayOrder = async () => {
    const res = await createUrlPayment({ orderId: item?._id });

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      const url = res.DT.vnpUrl;
      if (url) {
        window.location.replace(url);
      }
    }

    if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
      toast.error(res.EM);
    }
  };

  return (
    <div className="divide-y divide-dotted divide-white/20 rounded-sm bg-bgTertiary text-sm text-primary">
      <div className="flex items-center justify-end px-4 py-4 sm:justify-between sm:px-6 md:justify-end sr-950:justify-between">
        <span className="hidden text-13px sm:inline md:hidden sr-950:inline">
          <span className="font-semibold uppercase">
            {t("PurchasesPage.orderId")}.{" "}
          </span>
          <span>{item?._id}</span>
        </span>
        <div className="divide-x divide-solid divide-white/30 text-13px sr-530:text-sm">
          <span className="pr-2 font-semibold uppercase text-tertiary">
            {item?.orderStatus}
          </span>
          <span className="pl-2 font-semibold uppercase text-tertiary">
            {item?.paymentStatus === PAYMENT_STATUS.NOT_YET_PAID
              ? t("OrderDetailsPage.notPaid")
              : t("OrderDetailsPage.paid")}
          </span>
        </div>
      </div>
      <div
        className="cursor-pointer divide-y divide-solid divide-white/10 px-4 sm:px-6"
        onClick={() => goToDetail()}
      >
        {item?.dishes?.slice(0, 2)?.map((dish, index) => {
          return (
            <div
              key={`order-dish-${index}-${dish?._id}`}
              className="flex gap-4 py-2.5"
            >
              <div className="h-16 w-16 shrink-0 sr-530:h-20 sr-530:w-20">
                <img
                  src={dish?.image}
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <div className="flex grow flex-col justify-between overflow-hidden text-sm sr-530:flex-row sr-530:items-center sr-530:gap-6">
                <span className="font-medium max-sr-530:truncate">
                  {dish?.name}
                </span>
                <div className="flex flex-col items-end gap-0.5 sr-530:flex-col-reverse sr-530:gap-0">
                  <span className="mt-2 hidden font-medium text-tertiary sr-530:inline">
                    {formatCurrency(+dish?.discountedPrice * +dish?.quantity)}
                  </span>
                  <span>x{dish?.quantity}</span>
                  <span>
                    {dish?.discount && dish?.discount > 0 ? (
                      <span className="me-2 text-13px text-gray-300 line-through">
                        {formatCurrency(dish?.price)}
                      </span>
                    ) : (
                      <></>
                    )}
                    <span className="font-medium text-tertiary sr-530:text-primary">
                      {formatCurrency(dish?.discountedPrice)}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="py-2.5 text-center text-13px text-gray-300">
          {t("PurchasesPage.seeMore")}
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#0f2c29] px-4 py-3 sm:px-6">
        <span className="text-xs sr-530:text-13px">
          {item?.dishes?.length ?? 1} {t("PurchasesPage.dish")}
        </span>
        <div className="flex items-center gap-1.5">
          <span>{t("PurchasesPage.orderTotal")}:</span>
          <span className="text-[15px] font-semibold text-tertiary sr-530:text-lg md:text-xl">
            {formatCurrency(item?.orderTotal)}
          </span>
        </div>
      </div>
      {[
        ORDER_STATUS.pending,
        ORDER_STATUS.completed,
        ORDER_STATUS.canceled,
      ].includes(item?.orderStatus) && (
        <div className="flex items-center justify-end gap-3 bg-[#0f2c29] px-4 py-3 sm:px-6">
          {(item?.orderStatus === ORDER_STATUS.completed ||
            item?.orderStatus === ORDER_STATUS.canceled) && (
            <button
              className="rounded bg-tertiary px-4 py-2.5 text-13px font-medium hover:bg-yellow-600 sr-530:px-8"
              onClick={() => handleBuyAgain()}
            >
              {t("PurchasesPage.buyAgain")}
            </button>
          )}
          {item?.orderStatus === ORDER_STATUS.pending &&
            item?.paymentMethod === PAYMENT_METHOD.VNPAY &&
            item?.paymentStatus === PAYMENT_STATUS.NOT_YET_PAID && (
              <button
                className="rounded bg-primary px-4 py-2.5 text-13px font-medium text-gray-900 hover:bg-gray-200 sr-530:px-8"
                onClick={() => handlePayOrder()}
              >
                {t("PurchasesPage.payment")}
              </button>
            )}
          {item?.orderStatus === ORDER_STATUS.pending && (
            <button
              className="rounded bg-tertiary px-4 py-2.5 text-13px font-medium hover:bg-yellow-600 sr-530:px-8"
              onClick={() => handleCancelPurchase(item)}
            >
              {t("PurchasesPage.cancel")}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PurchaseItem;
