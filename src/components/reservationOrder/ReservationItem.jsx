const ReservationItem = ({}) => {
  return (
    <div className="divide-y divide-dotted divide-white/20 rounded-sm bg-bgTertiary text-sm text-primary">
      <div className="divide-y divide-solid divide-white/10 px-4">
        <div className="flex items-center justify-between py-4">
          <span className="text-13px">
            <span className="font-semibold uppercase">Mã đơn: </span>
            <span>66cf353a73abe7220a34ce7d</span>
          </span>
          <span className="hidden font-semibold uppercase text-tertiary sm:inline">
            Chờ xác nhận
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 py-4 sm:gap-0 sm:divide-x sm:divide-solid sm:divide-white/10 md:grid-cols-5 md:divide-none">
          <div className="col-span-2 space-y-4 sm:col-span-1 sm:pr-8 md:col-span-1 md:p-0">
            <div className="flex items-start gap-4 md:flex-col md:items-center">
              <span className="w-2/5 shrink-0 text-gray-200 md:w-fit">
                Người đặt
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-medium">Nguyễn Thiên Vũ</span>
                <span className="text-xs text-gray-100 sm:hidden md:inline md:text-center">
                  a@gmail.com
                </span>
                <span className="text-xs text-gray-100 sm:hidden md:inline md:text-center">
                  0123456789
                </span>
              </span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-4 md:hidden">
              <span className="w-2/5 shrink-0 text-gray-200">Email</span>
              <span className="font-medium">a@gmail.com</span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-4 md:hidden">
              <span className="w-2/5 shrink-0 text-gray-200">Điện thoại</span>
              <span className="font-medium">0123456789</span>
            </div>
          </div>
          <div className="col-span-2 space-y-4 sm:col-span-1 sm:pl-8 md:col-span-4 md:grid md:grid-cols-4 md:space-y-0 md:p-0">
            <div className="flex items-center gap-4 md:flex-col">
              <span className="w-2/5 shrink-0 text-gray-200 md:w-fit">
                Số người
              </span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex items-center gap-4 md:flex-col">
              <span className="w-2/5 shrink-0 text-gray-200 md:w-fit">
                Nhận bàn vào
              </span>
              <span className="font-medium">15:30 22/09/2024</span>
            </div>
            <div className="flex items-center gap-4 md:flex-col">
              <span className="w-2/5 shrink-0 text-gray-200 md:w-fit">
                {" "}
                Bàn
              </span>
              <span className="font-medium">10, 11, 12</span>
            </div>
            <div className="flex items-center gap-4 md:flex-col">
              <span className="w-2/5 shrink-0 text-gray-200 md:w-fit">
                Ghi chú
              </span>
              <span className="font-medium">Bàn ngoài trời nha</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#0f2c29] px-4 py-4">
        <div className="flex flex-col gap-0.5">
          <span className="font-semibold uppercase text-tertiary sm:hidden">
            Chờ xác nhận
          </span>
          <span className="text-xs text-gray-200 sm:text-sm">21/09/2024</span>
        </div>
        <button className="rounded-md bg-tertiary px-4 py-2 text-13px font-medium hover:bg-yellow-600">
          Hủy đặt bàn
        </button>
      </div>
    </div>
  );
};

export default ReservationItem;
