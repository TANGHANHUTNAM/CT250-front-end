import { useTranslation } from "react-i18next";

const ReservationItem = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="divide-y divide-dotted divide-white/20 rounded-sm bg-bgTertiary text-sm text-primary">
      <div className="divide-y divide-solid divide-white/10 px-4">
        <div className="flex items-center justify-between py-4">
          <span className="text-13px">
            <span className="font-semibold uppercase">
              {t("ReservationOrderPage.orderId")}.{" "}
            </span>
            <span>66cf353a73abe7220a34ce7d</span>
          </span>
          <span className="hidden font-semibold uppercase text-tertiary sm:inline">
            Chờ xác nhận
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 py-4 sm:gap-0 sm:divide-x sm:divide-solid sm:divide-white/10 lg:grid-cols-5 lg:divide-none">
          <div className="col-span-2 space-y-4 sm:col-span-1 sm:pr-8 lg:col-span-1 lg:p-0">
            <div className="flex items-start gap-4 lg:flex-col lg:items-center">
              <span className="w-2/5 shrink-0 text-gray-200 lg:w-fit">
                {t("ReservationOrderPage.customer")}
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-medium">Nguyễn Thiên Vũ</span>
                <span className="text-xs text-gray-100 sm:hidden lg:inline lg:text-center">
                  a@gmail.com
                </span>
                <span className="text-xs text-gray-100 sm:hidden lg:inline lg:text-center">
                  0123456789
                </span>
              </span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-4 lg:hidden">
              <span className="w-2/5 shrink-0 text-gray-200">Email</span>
              <span className="font-medium">a@gmail.com</span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-4 lg:hidden">
              <span className="w-2/5 shrink-0 text-gray-200">
                {t("ReservationOrderPage.phone")}
              </span>
              <span className="font-medium">0123456789</span>
            </div>
          </div>
          <div className="col-span-2 space-y-4 sm:col-span-1 sm:pl-8 lg:col-span-4 lg:grid lg:grid-cols-4 lg:space-y-0 lg:p-0">
            <div className="flex items-center gap-4 lg:flex-col">
              <span className="w-2/5 shrink-0 text-gray-200 lg:w-fit">
                {t("ReservationOrderPage.peopleNumber")}
              </span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex items-center gap-4 lg:flex-col">
              <span className="w-2/5 shrink-0 text-gray-200 lg:w-fit">
                {t("ReservationOrderPage.checkIn")}
              </span>
              <span className="font-medium">15:30 22/09/2024</span>
            </div>
            <div className="flex items-center gap-4 lg:flex-col">
              <span className="w-2/5 shrink-0 text-gray-200 lg:w-fit">
                {t("ReservationOrderPage.table")}
              </span>
              <span className="font-medium">10, 11, 12</span>
            </div>
            <div className="flex items-center gap-4 lg:flex-col">
              <span className="w-2/5 shrink-0 text-gray-200 lg:w-fit">
                {t("ReservationOrderPage.notes")}
              </span>
              <span className="font-medium">Bàn ngoài trời nha</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#0f2c29] px-4 py-4">
        <div className="flex grow items-center justify-between gap-0.5 sr-530:flex-col sr-530:items-start">
          <span className="font-semibold uppercase text-tertiary sm:hidden">
            Chờ xác nhận
          </span>
          <span className="text-xs text-gray-200 sm:text-sm">21/09/2024</span>
        </div>
        <button className="hidden rounded-md bg-tertiary px-4 py-2 text-13px font-medium hover:bg-yellow-600 sr-530:block">
          {t("ReservationOrderPage.cancelReservation")}
        </button>
      </div>
      <div className="flex justify-end p-4 sr-530:hidden">
        <button className="rounded-md bg-tertiary px-4 py-2 text-13px font-medium hover:bg-yellow-600">
          {t("ReservationOrderPage.cancelReservation")}
        </button>
      </div>
    </div>
  );
};

export default ReservationItem;
