import { useTranslation } from "react-i18next";
import emptyOrder from "../../assets/empty_order.png";

const EmptyReservation = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-sm bg-bgTertiary p-8">
      <img
        src={emptyOrder}
        loading="lazy"
        className="h-20 w-20 object-contain md:h-28 md:w-28"
      />
      <div className="text-sm font-medium text-primary">
        {t("ReservationOrderPage.emptyData")}
      </div>
    </div>
  );
};

export default EmptyReservation;
