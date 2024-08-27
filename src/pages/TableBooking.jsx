import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const TableBooking = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.booking"));

  return <>TableBooking</>;
};

export default TableBooking;
