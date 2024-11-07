import { MdArrowBack, MdCancel } from "react-icons/md";
import { FaReceipt, FaStar, FaShippingFast } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReviewModal from "../components/purchase/ReviewModal";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { createUrlPayment, getOrderById } from "../services/orderService";
import StatusCodes from "../utils/StatusCodes";
import { toast } from "react-toastify";
import { ORDER_STATUS, PAYMENT_METHOD, PAYMENT_STATUS } from "../constants";
import { formatAddress, formatCurrency } from "../utils/format";
import CancelModal from "../components/purchase/CancelModal";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cartSlice";
import RateModal from "../components/purchase/RateModal";

const OrderDetail = () => {
  const { id } = useParams();

  const [order, setOrder] = useState();
  const [isVisibleReviewModal, setIsVisibleReviewModal] = useState(false);
  const [isVisibleRateModal, setIsVisibleRateModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const getOrder = async () => {
    const res = await getOrderById(id);

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      setOrder(res.DT);
    }

    if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
      toast.error(res.EM);
    }
  };

  useEffect(() => {
    if (id) {
      getOrder();
    }
  }, []);

  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const dispatch = useDispatch();
  const handleBuyAgain = async () => {
    const addCart = async () => {
      order?.dishes?.forEach((dish) => {
        dispatch(addToCart({ id: dish?._id, quantity: dish?.quantity }));
      });
    };
    await addCart();
    navigate("/cart");
  };

  const handlePayOrder = async () => {
    const res = await createUrlPayment({ orderId: order?._id });

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

  const { t } = useTranslation();

  return (
    <div>
      <div className="divide-y divide-dotted divide-white/20 bg-bgTertiary text-sm text-primary">
        <div className="flex items-center justify-between p-5">
          <button
            className="flex cursor-pointer items-center gap-2 font-medium uppercase hover:text-amber-500"
            onClick={() => back()}
          >
            <MdArrowBack className="h-5 w-5" />
            <span>{t("OrderDetailsPage.back")}</span>
          </button>
          <div className="hidden divide-x divide-solid divide-white sr-950:block">
            <span className="pr-3">
              <span className="uppercase">
                {t("OrderDetailsPage.orderId")}.
              </span>{" "}
              {order?._id}
            </span>
            <span className="px-3 font-medium uppercase text-tertiary">
              {order?.orderStatus}
            </span>
            <span className="pl-3 font-medium uppercase text-tertiary">
              {order?.paymentStatus === PAYMENT_STATUS.NOT_YET_PAID
                ? t("OrderDetailsPage.notPaid")
                : t("OrderDetailsPage.paid")}
            </span>
          </div>
        </div>
        <div className="flex justify-end px-5 py-3 sm:justify-between md:justify-end sr-950:hidden">
          <span className="hidden sm:inline md:hidden">
            <span className="uppercase">{t("OrderDetailsPage.orderId")}.</span>{" "}
            {order?._id}
          </span>
          <div className="divide-x divide-solid divide-white">
            <span className="px-3 font-medium text-tertiary sr-530:uppercase">
              {order?.orderStatus}
            </span>
            <span className="pl-3 font-medium text-tertiary sr-530:uppercase">
              {order?.paymentStatus === PAYMENT_STATUS.NOT_YET_PAID
                ? t("OrderDetailsPage.notPaid")
                : t("OrderDetailsPage.paid")}
            </span>
          </div>
        </div>
        <div className="flex justify-between px-5 py-3 sm:hidden md:flex sr-950:hidden">
          <span className="">{t("OrderDetailsPage.orderId")}</span>
          <span>{order?._id}</span>
        </div>
        {order?.orderStatus === ORDER_STATUS.pending &&
          order?.paymentMethod === PAYMENT_METHOD.VNPAY &&
          order?.paymentStatus === PAYMENT_STATUS.NOT_YET_PAID && (
            <div className="flex items-center justify-end bg-[#0f2c29] px-5 py-4">
              <button
                className="w-40 rounded bg-tertiary px-8 py-2.5 text-13px font-medium hover:bg-yellow-600 sm:w-52"
                onClick={() => handlePayOrder()}
              >
                {t("OrderDetailsPage.payment")}
              </button>
            </div>
          )}
        {(order?.orderStatus === ORDER_STATUS.completed ||
          order?.orderStatus === ORDER_STATUS.canceled) && (
          <div className="flex items-center justify-end gap-4 bg-[#0f2c29] p-4 px-5">
            <button
              className="w-40 rounded bg-tertiary px-8 py-2.5 text-13px font-medium hover:bg-yellow-600 sm:w-52"
              onClick={() => handleBuyAgain()}
            >
              {t("OrderDetailsPage.buyAgain")}
            </button>
            {order?.orderStatus === ORDER_STATUS.completed && (
              <>
                {order?.rated === true && (
                  <button
                    className="w-40 rounded bg-primary px-8 py-2.5 text-13px font-medium text-gray-900 hover:bg-gray-200 sm:w-52"
                    onClick={() => setIsVisibleReviewModal(true)}
                  >
                    {t("OrderDetailsPage.viewRating")}
                  </button>
                )}
                {order?.rated === false && (
                  <button
                    className="w-40 rounded bg-primary px-8 py-2.5 text-13px font-medium text-gray-900 hover:bg-gray-200 sm:w-52"
                    onClick={() => setIsVisibleRateModal(true)}
                  >
                    {t("OrderDetailsPage.rate")}
                  </button>
                )}
              </>
            )}
          </div>
        )}
        <div className="divide-y divide-solid divide-white/10 px-5">
          {order?.dishes?.map((dish, i) => {
            return (
              <div key={`order-detail-${i}-${dish?._id}`}>
                <Link to={`/dish-detail/${dish?._id}`}>
                  <div className="flex gap-4 py-5">
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
                      <div className="sm:flex sm:gap-6">
                        <div className="flex shrink-0 flex-col items-end gap-0.5 sr-530:flex-col-reverse sr-530:gap-0">
                          <span className="mt-2 hidden font-medium text-tertiary sr-530:inline">
                            {formatCurrency(
                              +dish?.discountedPrice * +dish?.quantity,
                            )}
                          </span>
                          <span>x{dish?.quantity}</span>
                          <span>
                            {dish?.discount > 0 && (
                              <span className="me-2 text-13px text-gray-300 line-through">
                                {formatCurrency(dish?.price)}
                              </span>
                            )}
                            <span className="font-medium text-tertiary sr-530:text-primary">
                              {formatCurrency(dish?.discountedPrice)}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="space-y-3 p-5">
          <p className="text-lg font-medium">
            {t("OrderDetailsPage.deliveryAddress")}
          </p>
          <div className="flex flex-col divide-y divide-solid divide-white/10 lg:flex-row lg:divide-x lg:divide-y-0">
            <div className="flex-1 space-y-2 pb-4 lg:pb-0 lg:pr-4">
              <p className="pb-2.5 font-medium">{order?.receiverName}</p>
              <p className="text-gray-200">{order?.receiverPhone}</p>
              <p className="text-gray-200">
                {order?.receiverAddress &&
                  formatAddress(order?.receiverAddress)}
              </p>
              <p className="text-gray-200">
                {t("OrderDetailsPage.notes")}: {order?.note}
              </p>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex flex-1 gap-4 pt-4 lg:pl-4 lg:pt-0">
                <FaReceipt className="h-5 w-5 pt-1 text-blue-400" />
                <div className="grow space-y-2 pt-1 text-13px">
                  <p className="pb-1">
                    {new Date(order?.orderDate).toLocaleString("vi-VN")}
                  </p>
                  <p className="text-blue-400">{t("OrderDetailsPage.orderPlaced")}</p>
                </div>
              </div>
              {order?.deliveryDate && (
                <div className="flex flex-1 gap-4 pt-4 lg:pl-4 lg:pt-0">
                  <FaShippingFast className="h-5 w-5 pt-1 text-green-400" />
                  <div className="grow space-y-2 pt-1 text-13px">
                    <p className="pb-1">
                      {" "}
                      {new Date(order?.deliveryDate).toLocaleString("vi-VN")}
                    </p>
                    <p className="text-green-400">{t("OrderDetailsPage.orderDelivered")}</p>
                  </div>
                </div>
              )}
              {order?.orderStatus === ORDER_STATUS.canceled && (
                <div className="flex flex-1 gap-4 pt-4 lg:pl-4 lg:pt-0">
                  <MdCancel className="h-5 w-5 pt-1 text-red-500" />
                  <div className="grow space-y-2 pt-1 text-13px">
                    <p className="pb-1">
                      {" "}
                      {new Date(order?.updatedAt).toLocaleString("vi-VN")}
                    </p>
                    <p className="text-red-500">{t("OrderDetailsPage.orderCanceled")}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="divide-y divide-dotted divide-white/20 bg-[#0f2c29] text-13px">
          <div className="flex divide-x divide-dotted divide-white/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-300 lg:w-2/3">
              {t("OrderDetailsPage.paymentMethod")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right">
              {order?.paymentMethod}
            </div>
          </div>
          <div className="flex divide-x divide-dotted divide-white/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-300 lg:w-2/3">
              {t("OrderDetailsPage.merchandiseSubtotal")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right">
              {formatCurrency(order?.totalPrice)}
            </div>
          </div>
          <div className="flex divide-x divide-dotted divide-white/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-300 lg:w-2/3">
              {t("OrderDetailsPage.shippingFee")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right">
              {formatCurrency(order?.shippingFee)}
            </div>
          </div>
          {order?.coupon && order?.discountedAmount && (
            <div className="flex divide-x divide-dotted divide-white/20">
              <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-300 lg:w-2/3">
                {t("OrderDetailsPage.voucherApplied")}
              </div>
              <div className="flex grow items-center justify-end px-5 py-4 text-right">
                {formatCurrency(order?.discountedAmount)}
              </div>
            </div>
          )}
          <div className="flex divide-x divide-dotted divide-white/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-300 lg:w-2/3">
              {t("OrderDetailsPage.orderTotal")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right text-base font-semibold text-tertiary sm:text-2xl">
              {formatCurrency(order?.orderTotal)}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end p-5 sr-530:justify-between">
          <span
            className={`text-xs text-gray-300 ${order?.orderStatus === ORDER_STATUS.pending ? "hidden sr-530:inline" : ""}`}
          >
            {t("OrderDetailsPage.thanks")}
          </span>
          {order?.orderStatus === ORDER_STATUS.pending && (
            <button
              className="w-40 rounded bg-red-600 px-8 py-2.5 text-13px font-medium text-primary hover:bg-red-700 sm:w-52"
              onClick={() => setShowCancelModal(true)}
            >
              {t("OrderDetailsPage.cancelOrder")}
            </button>
          )}
        </div>
      </div>
      {order?.orderStatus === ORDER_STATUS.pending && (
        <CancelModal
          show={showCancelModal}
          setShow={setShowCancelModal}
          data={order}
          refetchOrder={getOrder}
        />
      )}
      {order?.rated === true && isVisibleReviewModal && (
        <ReviewModal
          show={isVisibleReviewModal}
          handleClose={() => setIsVisibleReviewModal(false)}
          orderId={order?._id}
        />
      )}
      {order?.rated === false && isVisibleRateModal && (
        <RateModal
          show={isVisibleRateModal}
          handleClose={() => setIsVisibleRateModal(false)}
          dishes={order?.dishes}
          orderId={order?._id}
          refetchOrder={getOrder}
        />
      )}
    </div>
  );
};

export default OrderDetail;
