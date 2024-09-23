import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaReceipt } from "react-icons/fa";

const OrderDetail = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="divide-y divide-dotted divide-white/20 text-sm text-primary">
      <div className="flex items-center justify-between p-5">
        <button
          className="flex cursor-pointer items-center gap-2 font-medium uppercase hover:text-amber-500"
          onClick={() => back()}
        >
          <MdArrowBack className="h-5 w-5" />
          <span>Trở về</span>
        </button>
        <div className="divide-x divide-solid divide-white">
          <span className="pr-3">
            <span className="uppercase">Mã đơn.</span> 123456789456gk
          </span>
          <span className="pl-3 font-medium uppercase text-tertiary">
            Đã giao hàng thành công
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#0f2c29] px-5 py-4">
        <span className="text-xs text-gray-300">
          Cảm ơn bạn đã mua sắm với Tonatra!
        </span>
        <button className="w-52 rounded bg-tertiary px-8 py-2.5 text-13px font-medium hover:bg-yellow-600">
          Mua lại
        </button>
      </div>
      <div className="flex items-center justify-end bg-[#0f2c29] p-4 px-5">
        <button className="w-52 rounded bg-primary px-8 py-2.5 text-13px font-medium text-gray-900 hover:bg-gray-200">
          Xem đánh giá
        </button>
      </div>
      <div className="divide-y divide-solid divide-white/10 px-5">
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
            <div className="flex flex-col items-end gap-0.5 sr-530:flex-col-reverse sr-530:gap-0">
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
          </div>
        </div>
        <div className="flex gap-4 py-5">
          <div className="h-16 w-16 shrink-0 sr-530:h-20 sr-530:w-20">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1240f05c5ee174bcdaf47d5ec33197.jpg?v=1667882506833"
              loading="lazy"
              className="object-contain"
            />
          </div>
          <div className="flex grow flex-col justify-between overflow-hidden text-sm sr-530:flex-row sr-530:items-center">
            <span className="font-medium max-sr-530:truncate">
              Ba rọi nướng riềng mẻ
            </span>
            <div className="flex flex-col items-end gap-0.5 sr-530:flex-col-reverse sr-530:gap-0">
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
          </div>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <p className="text-lg font-medium">Địa chỉ giao hàng</p>
        <div className="flex divide-x divide-solid divide-white/10">
          <div className="flex-1 space-y-2 pr-4">
            <p className="pb-2.5 font-medium">Thiên Vũ</p>
            <p className="text-gray-200">0123456789</p>
            <p className="text-gray-200">
              Hẻm 32, Đường Nguyễn Văn Cừ, Phường An Khánh, Quận Ninh Kiều,
              Thành phố Cần Thơ
            </p>
            <p className="text-gray-200">Ghi chú: Giao vào buổi chiều nha</p>
          </div>
          <div className="flex flex-1 gap-4 pl-4">
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
      <div className="divide-y divide-dotted divide-white/20 bg-[#0f2c29]">
        <div className="flex divide-x divide-dotted divide-white/20">
          <div className="w-2/3 shrink-0 px-5 py-4 text-right text-gray-300">
            Phương thức thanh toán
          </div>
          <div className="grow px-5 py-4 text-right">
            Thanh toán khi nhận hàng
          </div>
        </div>
        <div className="flex divide-x divide-dotted divide-white/20">
          <div className="w-2/3 shrink-0 px-5 py-4 text-right text-gray-300">
            Tổng tiền hàng
          </div>
          <div className="grow px-5 py-4 text-right">200.000đ</div>
        </div>
        <div className="flex divide-x divide-dotted divide-white/20">
          <div className="w-2/3 shrink-0 px-5 py-4 text-right text-gray-300">
            Phí vận chuyển
          </div>
          <div className="grow px-5 py-4 text-right">15.000đ</div>
        </div>
        <div className="flex divide-x divide-dotted divide-white/20">
          <div className="w-2/3 shrink-0 px-5 py-4 text-right text-gray-300">
            Mã giảm giá từ nhà hàng
          </div>
          <div className="grow px-5 py-4 text-right">10.000đ</div>
        </div>
        <div className="flex divide-x divide-dotted divide-white/20">
          <div className="w-2/3 shrink-0 px-5 py-4 text-right text-gray-300">
            Thành tiền
          </div>
          <div className="grow px-5 py-4 text-right text-2xl font-semibold text-tertiary">
            175.000đ
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
