import { Link } from "react-router-dom";
import vnpay from "../../assets/vnpay.svg";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const BillDetetail = () => {
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
            className="mr-2 w-full rounded-sm p-2 text-sm font-semibold text-black/65 outline-none"
          />
          <button className="w-[100px] rounded-sm bg-tertiary px-3 py-2 text-sm font-medium hover:bg-yellow-500">
            Áp dụng
          </button>
        </div>
        {/* Detail */}
        <div className="subtotal mt-3 flex justify-between">
          <span className="">Tạm thanh toán</span>
          <span className="">500.000</span>
        </div>
        <div className="shippingfee mt-1 flex justify-between">
          <span className="">Phí vận chuyển</span>
          <span className="">500.000</span>
        </div>
        <div className="discount mt-1 flex justify-between">
          <span className="">Giảm giá</span>
          <span className="">0</span>
        </div>
        <div className="total mt-3 flex justify-between border-b border-solid border-tertiary pb-3 text-lg font-semibold">
          <span className="">Tổng thanh toán:</span>
          <span className="">1.500.000</span>
        </div>
      </div>
      {/* Payment Method */}
      <div className="">
        <div className="text-xl font-semibold uppercase text-tertiary">
          Phương thức thanh toán
        </div>
        <div className="mt-2 flex flex-col gap-3 md:flex-row">
          <div className="flex cursor-pointer items-center justify-between rounded-sm bg-white p-3 hover:bg-tertiary md:w-1/2">
            <input type="radio" className="ml-2" />
            <img src={vnpay} alt="vnpay" className="w-20" />
          </div>
          <div className="flex cursor-pointer items-center justify-between rounded-sm bg-white p-3 hover:bg-tertiary md:w-1/2">
            <input type="radio" className="ml-2" />
            <span className="ml-2 text-sm font-bold text-black/65">
              Thanh toán khi nhận hàng
            </span>
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
          <span className="">Trở lại giỏ hàng</span>
        </Link>
        <div className="cursor-pointer rounded-sm bg-tertiary px-4 py-2 hover:bg-yellow-500">
          Đặt hàng
        </div>
      </div>
    </div>
  );
};

export default BillDetetail;
