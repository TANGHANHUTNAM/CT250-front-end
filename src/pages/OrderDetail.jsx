import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaReceipt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReviewModal from "../components/purchase/ReviewModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const OrderDetail = () => {
  const [isVisibleReviewModal, setIsVisibleReviewModal] = useState(false);

  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
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
          <div className="sm:divide-x sm:divide-solid sm:divide-white">
            <span className="hidden pr-3 sm:inline">
              <span className="uppercase">
                {t("OrderDetailsPage.orderId")}.
              </span>{" "}
              123456789456gk
            </span>
            <span className="pl-3 font-medium uppercase text-tertiary">
              Hoàn thành
            </span>
          </div>
        </div>
        <div className="flex justify-between px-5 py-3 sm:hidden">
          <span className="">{t("OrderDetailsPage.orderId")}</span>
          <span>123456789456gk</span>
        </div>
        <div className="flex items-center justify-end bg-[#0f2c29] px-5 py-4 sr-530:justify-between">
          <span className="hidden text-xs text-gray-300 sr-530:inline">
            {t("OrderDetailsPage.thanks")}
          </span>
          <button className="w-40 rounded bg-tertiary px-8 py-2.5 text-13px font-medium hover:bg-yellow-600 sm:w-52">
            {t("OrderDetailsPage.buyAgain")}
          </button>
        </div>
        <div className="flex items-center justify-end bg-[#0f2c29] p-4 px-5">
          <button
            className="w-40 rounded bg-primary px-8 py-2.5 text-13px font-medium text-gray-900 hover:bg-gray-200 sm:w-52"
            onClick={() => setIsVisibleReviewModal(true)}
          >
            {t("OrderDetailsPage.viewRating")}
          </button>
        </div>
        <div className="divide-y divide-solid divide-white/10 px-5">
          <Link to={`/dish-detail/${1}`}>
            <div className="flex gap-4 py-5">
              <div className="h-16 w-16 shrink-0 sr-530:h-20 sr-530:w-20">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1240f05c5ee174bcdaf47d5ec33197.jpg?v=1667882506833"
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <div className="flex grow flex-col justify-between overflow-hidden text-sm sr-530:flex-row sr-530:items-center sr-530:gap-6">
                <span className="font-medium max-sr-530:truncate">
                  Ba rọi nướng riềng mẻ
                </span>
                <div className="sm:flex sm:gap-6">
                  <div className="flex shrink-0 flex-col items-end gap-0.5 sr-530:flex-col-reverse sr-530:gap-0">
                    <span className="mt-2 hidden font-medium text-tertiary sr-530:inline">
                      191.00đ
                    </span>
                    <span>x1</span>
                    <span>
                      <span className="me-2 text-13px text-gray-300 line-through">
                        200.000đ
                      </span>
                      <span className="font-medium text-tertiary sr-530:text-primary">
                        191.00đ
                      </span>
                    </span>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-2">
                    <p>{t("OrderDetailsPage.rating")}</p>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="space-y-3 p-5">
          <p className="text-lg font-medium">
            {t("OrderDetailsPage.deliveryAddress")}
          </p>
          <div className="flex flex-col divide-y divide-solid divide-white/10 lg:flex-row lg:divide-x lg:divide-y-0">
            <div className="flex-1 space-y-2 pb-4 lg:pb-0 lg:pr-4">
              <p className="pb-2.5 font-medium">Thiên Vũ</p>
              <p className="text-gray-200">0123456789</p>
              <p className="text-gray-200">
                Hẻm 32, Đường Nguyễn Văn Cừ, Phường An Khánh, Quận Ninh Kiều,
                Thành phố Cần Thơ
              </p>
              <p className="text-gray-200">
                {t("OrderDetailsPage.notes")}: Giao vào buổi chiều nha
              </p>
            </div>
            <div className="flex flex-1 gap-4 pt-4 lg:pl-4 lg:pt-0">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 p-2">
                <FaReceipt />
              </span>
              <div className="grow space-y-2 pt-1 text-13px">
                <p className="pb-2">24-09-2024 00:04:25</p>
                <p className="font-semibold text-green-400">
                  Đặt hàng thành công
                </p>
                <p className="text-green-400">Đơn hàng đã được đặt</p>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-dotted divide-white/20 bg-[#0f2c29] text-13px">
          <div className="flex divide-x divide-dotted divide-white/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-300 lg:w-2/3">
              {t("OrderDetailsPage.paymentMethod")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right">
              Thanh toán khi nhận hàng
            </div>
          </div>
          <div className="flex divide-x divide-dotted divide-white/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-300 lg:w-2/3">
              {t("OrderDetailsPage.merchandiseSubtotal")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right">
              200.000đ
            </div>
          </div>
          <div className="flex divide-x divide-dotted divide-white/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-300 lg:w-2/3">
              {t("OrderDetailsPage.shippingFee")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right">
              15.000đ
            </div>
          </div>
          <div className="flex divide-x divide-dotted divide-white/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-300 lg:w-2/3">
              {t("OrderDetailsPage.voucherApplied")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right">
              10.000đ
            </div>
          </div>
          <div className="flex divide-x divide-dotted divide-white/20">
            <div className="flex w-3/5 shrink-0 items-center justify-end px-5 py-4 text-right text-gray-300 lg:w-2/3">
              {t("OrderDetailsPage.orderTotal")}
            </div>
            <div className="flex grow items-center justify-end px-5 py-4 text-right text-lg font-semibold text-tertiary sm:text-2xl">
              175.000đ
            </div>
          </div>
        </div>
        <div className="flex justify-end p-5">
          <button className="w-40 rounded bg-red-600 px-8 py-2.5 text-13px font-medium text-primary hover:bg-red-700 sm:w-52">
            {t("OrderDetailsPage.cancelOrder")}
          </button>
        </div>
      </div>
      <ReviewModal
        show={isVisibleReviewModal}
        handleClose={() => setIsVisibleReviewModal(false)}
      />
    </div>
  );
};

export default OrderDetail;
