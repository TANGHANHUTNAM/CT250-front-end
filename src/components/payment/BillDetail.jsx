import { Link } from "react-router-dom";
import vnpay from "../../assets/vnpay.svg";
import tienmat from "../../assets/tienmat.png";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/format";

const BillDetetail = () => {
  const { shippingFee, finalPrice, totalPrice, totalDiscount } = useSelector(
    (state) => state.order,
  );

  return (
    <div className="flex w-full flex-col justify-between gap-3 rounded-md border border-solid border-tertiary p-6 md:w-1/2">
      {/* Bill detail */}
      <div className="detail-bill flex flex-col justify-between gap-1">
        <div className="text-xl font-semibold uppercase text-tertiary">
          Chi tiết hóa đơn
        </div>
        {/* Code coupon */}
        <div className="input-discount mt-2 flex">
          <input
            type="text"
            placeholder="Nhập mã giảm giá"
            className="mr-2 w-full rounded-sm p-2 text-xs font-semibold text-black/65 outline-none"
          />
          <button className="min-w-fit rounded-sm bg-tertiary px-3 py-2 text-xs font-medium hover:bg-yellow-500">
            Áp dụng
          </button>
        </div>
        {/* Detail */}
        <div className="subtotal mt-3 flex justify-between">
          <span className="">Tạm thanh toán</span>
          <span className="font-medium">{formatCurrency(totalPrice)}</span>
        </div>
        <div className="shippingfee mt-1 flex justify-between">
          <span className="">Phí vận chuyển</span>
          <span className="font-medium">{formatCurrency(shippingFee)}</span>
        </div>
        <div className="discount mt-1 flex justify-between">
          <span className="">Giảm giá</span>
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
        <div className="mt-2 flex flex-col gap-3 md:flex-row">
          <div className="flex flex-1 cursor-pointer items-center justify-between rounded-sm bg-white p-2 hover:bg-gray-200">
            <input type="radio" className="h-[32px]" />
            <span className="ml-1 text-xs font-bold text-gray-500">
              Chuyển khoản
            </span>
            <img src={vnpay} alt="vnpay" className="w-16" />
          </div>
          <div className="flex flex-1 cursor-pointer items-center justify-between rounded-sm bg-white p-2 hover:bg-gray-200">
            <input type="radio" className="" />
            <span className="text-xs font-bold text-gray-500">Tiền mặt</span>
            <img src={tienmat} alt="tienmat" className="w-8" />
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
        <div className="cursor-pointer rounded-sm bg-tertiary px-4 py-2 text-sm hover:bg-yellow-500">
          Đặt hàng
        </div>
      </div>
    </div>
  );
};

export default BillDetetail;
