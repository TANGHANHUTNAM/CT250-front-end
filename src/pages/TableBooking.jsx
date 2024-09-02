import Booking from "../components/booking/Booking";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const TableBooking = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.booking"));
  useTopPage();
  return (
    <>
      <Booking />
    </>
  );
};

export default TableBooking;
