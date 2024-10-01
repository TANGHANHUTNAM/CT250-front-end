import { useTranslation } from "react-i18next";
import { useDynamicTitle, useTopPage } from "../hooks";
import Tabs from "../components/tabs/Tabs";
import { useState } from "react";
import AllReservationOrder from "../components/reservationOrder/AllReservationOrder";
import ConfirmationPending from "../components/reservationOrder/ConfirmationPending";
import ConfirmedOrder from "../components/reservationOrder/ConfirmedOrder";
import CanceledOrder from "../components/reservationOrder/CanceledOrder";
import CompletedOrder from "../components/reservationOrder/CompletedOrder";

const tabs = {
  all: {
    key: "all",
    label: "Tất cả",
    tabContent: <AllReservationOrder />,
    trans: "ReservationOrderPage.all",
  },
  pending_confirm: {
    key: "pending_confirm",
    label: "Chờ xác nhận",
    tabContent: <ConfirmationPending />,
    trans: "ReservationOrderPage.toConfirm",
  },
  confirmed: {
    key: "confirmed",
    label: "Đã xác nhận",
    tabContent: <ConfirmedOrder />,
    trans: "ReservationOrderPage.confirmed",
  },
  completed: {
    key: "completed",
    label: "Hoàn thành",
    tabContent: <CompletedOrder />,
    trans: "ReservationOrderPage.completed",
  },
  canceled: {
    key: "canceled",
    label: "Đã hủy",
    tabContent: <CanceledOrder />,
    trans: "ReservationOrderPage.cancelled",
  },
};

const ReservationOrders = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.reservation_orders"));
  useTopPage();

  const [tabKey, setTabKey] = useState("all");

  return (
    <div className="h-full w-full space-y-4 bg-bgPrimary">
      <div className="rounded-sm bg-bgTertiary text-primary">
        <Tabs
          tabs={Object.values(tabs)}
          activeTab={tabKey}
          onChange={(key) => setTabKey(key)}
          translation={true}
        />
      </div>
      <div className="space-y-4">{tabs[tabKey].tabContent}</div>
    </div>
  );
};

export default ReservationOrders;
