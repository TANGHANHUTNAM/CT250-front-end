import { Link } from "react-router-dom";
import vnpay from "../../assets/vnpay.svg";
import tienmat from "../../assets/tienmat.png";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/format";
import {
  setPaymentMethod,
  setTotalDiscount,
} from "../../redux/reducer/orderSlice";
import { getPriceDiscountByCoupon } from "../../services/couponService";
import StatusCodes from "../../utils/StatusCodes";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMethodsPayment } from "../../services/paymentService";

const BillDetetail = () => {
  const dispatch = useDispatch();

  const [coupon, setCoupon] = useState("");
  const {
    totalQuantity,
    shippingFee,
    finalPrice,
    totalPrice,
    totalDiscount,
    paymentMethod,
  } = useSelector((state) => state.order);

  const handleGetPriceDiscountByCoupon = async (data) => {
    try {
      const res = await getPriceDiscountByCoupon(data);
      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        toast.success("Áp dụng mã giảm giá thành công");
        dispatch(setTotalDiscount(res.DT.discountAmount));
      }
      if (res && res.EC !== StatusCodes.SUCCESS_DAFAULT) {
        toast.error("Mã giảm giá không hợp lệ hoặc đã hết hạn!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [listPaymentMethod, setListPaymentMethod] = useState([]);
  useEffect(() => {
    const fetchPaymentMethod = async () => {
      try {
        const res = await getMethodsPayment();
        console.log(res);
        if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
          setListPaymentMethod(res.DT);
        }
        if (res && res.EC !== StatusCodes.SUCCESS_DAFAULT) {
          toast.error(res.EM);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPaymentMethod();
  }, []);

  const handleChoosePaymentMethod = (value) => {
    dispatch(setPaymentMethod(value));
  };

  return (
    <div className="flex w-full flex-col justify-between gap-3 rounded-md border border-solid border-tertiary p-6 md:w-1/2">
      {/* Bill detail */}
      <div className="detail-bill flex flex-col justify-between gap-1">
        <div className="text-xl font-semibold uppercase text-tertiary">
          Chi tiết thanh toán
        </div>
        {/* Code coupon */}
        <div className="input-discount mt-2 flex">
          <input
            onChange={(e) => setCoupon(e.target.value)}
            type="text"
            placeholder="Nhập mã giảm giá"
            className="mr-2 w-full rounded-sm p-2 text-xs font-semibold text-black/65 outline-none"
            value={coupon}
          />
          <button
            onClick={() => {
              if (coupon) {
                handleGetPriceDiscountByCoupon({
                  code: coupon,
                  orderTotal: totalPrice,
                });
                setCoupon("");
              }
            }}
            className="min-w-fit rounded-sm bg-tertiary px-3 py-2 text-xs font-medium hover:bg-yellow-500"
          >
            Áp dụng
          </button>
        </div>
        {/* Detail */}
        <div className="subtotal mt-3 flex justify-between">
          <span className="">Tổng số lượng:</span>
          <span className="font-medium">{totalQuantity}</span>
        </div>
        <div className="shippingfee mt-1 flex justify-between">
          <span className="">Tạm thanh toán:</span>
          <span className="font-medium">{formatCurrency(totalPrice)}</span>
        </div>
        <div className="shippingfee mt-1 flex justify-between">
          <span className="">Phí vận chuyển:</span>
          <span className="font-medium">{formatCurrency(shippingFee)}</span>
        </div>
        <div className="discount mt-1 flex justify-between">
          <span className="">Giảm giá:</span>
          <span className="font-medium">{formatCurrency(totalDiscount)}</span>
        </div>
        <div className="total mt-3 flex justify-between border-b border-solid border-tertiary pb-3 text-base font-semibold md:text-lg">
          <span className="">Tổng thanh toán:</span>
          <span className="font-medium">{formatCurrency(finalPrice)}</span>
        </div>
      </div>
      {/* Payment Method */}
      <div className="">
        <div className="text-lg font-semibold uppercase text-tertiary md:text-xl">
          Phương thức thanh toán
        </div>
        <div className="mt-2 flex flex-col gap-3">
          <div
            onClick={() => handleChoosePaymentMethod(listPaymentMethod[1]?._id)}
            className="flex flex-1 cursor-pointer items-center justify-between rounded-sm bg-white p-2 hover:bg-gray-200 sm:px-4"
          >
            <div className="flex items-center justify-center gap-2">
              <input
                type="radio"
                className="h-[32px]"
                name="paymentMethod"
                value={listPaymentMethod[1]?._id}
                onChange={(e) => e.stopPropagation()}
                checked={paymentMethod === listPaymentMethod[1]?._id}
              />
              <span className="ml-1 min-w-fit text-xs font-semibold text-gray-500">
                {listPaymentMethod[1]?.name}
              </span>
            </div>
            <img src={vnpay} alt="vnpay" className="hidden w-16 sm:block" />
          </div>
          <div
            onClick={() => handleChoosePaymentMethod(listPaymentMethod[0]?._id)}
            className="flex flex-1 cursor-pointer items-center justify-between rounded-sm bg-white p-2 hover:bg-gray-200 sm:px-4"
          >
            <div className="flex items-center justify-center gap-2">
              <input
                type="radio"
                className=""
                name="paymentMethod"
                value={listPaymentMethod[0]?._id}
                onChange={(e) => e.stopPropagation()}
                checked={paymentMethod === listPaymentMethod[0]?._id}
              />
              <span className="py-2 text-xs font-semibold text-gray-500 sm:p-0">
                {listPaymentMethod[0]?.name}
              </span>
            </div>
            <img src={tienmat} alt="tienmat" className="hidden w-8 sm:block" />
          </div>
        </div>
      </div>
      {/* button */}
      <div className="flex items-center justify-between">
        <Link
          to="/cart"
          className="flex items-center font-medium text-gray-100 hover:text-tertiary"
        >
          <MdKeyboardDoubleArrowLeft />
          <span className="text-sm">Trở lại giỏ hàng</span>
        </Link>
        <button
          form="form_order"
          className="min-w-fit cursor-pointer rounded-sm bg-tertiary px-4 py-2 text-sm hover:bg-yellow-500"
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default BillDetetail;
