import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const TableBooking = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.booking"));
  useTopPage();
  return <>TableBooking</>;
};

export default TableBooking;
