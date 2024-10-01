import { useTranslation } from "react-i18next";
import { status } from "./constants";

const ReservationItem = ({ item = {} }) => {
  const { t } = useTranslation();

  return (
    <div className="divide-y divide-dotted divide-white/20 rounded-sm bg-bgTertiary text-sm text-primary">
      <div className="divide-y divide-solid divide-white/10 px-4">
        <div className="flex items-center justify-between py-4">
          <span className="text-13px">
            <span className="font-semibold uppercase">
              {t("ReservationOrderPage.orderId")}.{" "}
            </span>
            <span>{item?._id}</span>
          </span>
          <span className="hidden font-semibold uppercase text-tertiary sm:inline">
            {item?.status}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 py-4 sm:gap-0 sm:divide-x sm:divide-solid sm:divide-white/10">
          <div className="col-span-2 space-y-4 sm:col-span-1 sm:pr-8">
            <div className="flex items-start gap-4">
              <span className="w-2/5 shrink-0 text-gray-200">
                {t("ReservationOrderPage.customer")}
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-medium">{item?.customerName}</span>
                <span className="break-all text-xs text-gray-100 sm:hidden">
                  {item?.customerEmail}
                </span>
                <span className="text-xs text-gray-100 sm:hidden">
                  {item?.customerPhone}
                </span>
              </span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-4">
              <span className="w-2/5 shrink-0 text-gray-200">Email</span>
              <span className="break-all font-medium">
                {item?.customerEmail}
              </span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-4">
              <span className="w-2/5 shrink-0 text-gray-200">
                {t("ReservationOrderPage.phone")}
              </span>
              <span className="font-medium">{item?.customerPhone}</span>
            </div>
          </div>
          <div className="col-span-2 space-y-4 sm:col-span-1 sm:pl-8">
            <div className="flex items-center gap-4">
              <span className="w-2/5 shrink-0 text-gray-200">
                {t("ReservationOrderPage.peopleNumber")}
              </span>
              <span className="font-medium">{item?.peopleNumber}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-2/5 shrink-0 text-gray-200">
                {t("ReservationOrderPage.checkIn")}
              </span>
              <span className="font-medium">
                {item?.arrivalTime}{" "}
                {new Date(item?.arrivalDate).toLocaleDateString("vi-VN")}
              </span>
            </div>
            {item.tables && item.tables.length > 0 && (
              <div className="flex items-center gap-4">
                <span className="w-2/5 shrink-0 text-gray-200">
                  {t("ReservationOrderPage.table")}
                </span>
                <span className="font-medium">
                  {item?.tables?.join()?.replace(",", ", ")}
                </span>
              </div>
            )}
            {item?.note && (
              <div className="flex items-center gap-4">
                <span className="w-2/5 shrink-0 text-gray-200">
                  {t("ReservationOrderPage.notes")}
                </span>
                <span className="font-medium">{item?.note}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#0f2c29] px-4 py-4">
        <div
          className={`flex grow items-center justify-between gap-0.5 sr-530:flex-col sr-530:items-start ${item?.status !== status.pending ? "sr-530:!flex-row" : ""}`}
        >
          <span className="font-semibold uppercase text-tertiary sm:hidden">
            {item?.status}
          </span>
          <span className="text-xs text-gray-200 sm:text-sm">
            {new Date(item?.createdAt).toLocaleString("vi-VN")}
          </span>
        </div>
        {item?.status === status.pending && (
          <button className="hidden rounded-md bg-tertiary px-4 py-2 text-13px font-medium hover:bg-yellow-600 sr-530:block">
            {t("ReservationOrderPage.cancelReservation")}
          </button>
        )}
      </div>
      {item?.status === status.pending && (
        <div className="flex justify-end p-4 sr-530:hidden">
          <button className="rounded-md bg-tertiary px-4 py-2 text-13px font-medium hover:bg-yellow-600">
            {t("ReservationOrderPage.cancelReservation")}
          </button>
        </div>
      )}
    </div>
  );
};

export default ReservationItem;
