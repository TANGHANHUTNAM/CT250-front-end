import { useTranslation } from "react-i18next";
import { useDynamicTitle, useTopPage } from "../hooks";
import Tabs from "../components/tabs/Tabs";
import { useState } from "react";
import AllReservationOrder from "../components/reservationOrder/AllReservationOrder";
import ConfirmationPending from "../components/reservationOrder/ConfirmationPending";
import ConfirmedOrder from "../components/reservationOrder/ConfirmedOrder";
import CanceledOrder from "../components/reservationOrder/CanceledOrder";
import CompletedOrder from "../components/reservationOrder/CompletedOrder";

const ReservationOrders = ({}) => {
  const { t } = useTranslation();
  
  const tabs = {
    all: {
      key: "all",
      label: t("ReservationOrderPage.all"),
      tabContent: <AllReservationOrder />,
      trans: "ReservationOrderPage.all",
    },
    pending_confirm: {
      key: "pending_confirm",
      label:  t("ReservationOrderPage.toConfirm"),
      tabContent: <ConfirmationPending />,
      trans: "ReservationOrderPage.toConfirm",
    },
    confirmed: {
      key: "confirmed",
      label:  t("ReservationOrderPage.confirmed"),
      tabContent: <ConfirmedOrder />,
      trans: "ReservationOrderPage.confirmed",
    },
    completed: {
      key: "completed",
      label:  t("ReservationOrderPage.completed"),
      tabContent: <CompletedOrder />,
      trans: "ReservationOrderPage.completed",
    },
    canceled: {
      key: "canceled",
      label:  t("ReservationOrderPage.cancelled"),
      tabContent: <CanceledOrder />,
      trans: "ReservationOrderPage.cancelled",
    },
  };
  
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
