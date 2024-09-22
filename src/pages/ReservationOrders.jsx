import { useTranslation } from "react-i18next";
import { useDynamicTitle, useTopPage } from "../hooks";
import Tabs from "../components/tabs/Tabs";
import { useState } from "react";
import AllReservationOrder from "../components/reservationOrder/AllReservationOrder";
import ConfirmationPending from "../components/reservationOrder/ConfirmationPending";
import ConfirmedOrder from "../components/reservationOrder/ConfirmedOrder";
import CanceledOrder from "../components/reservationOrder/CanceledOrder";

const tabs = {
  all: {
    key: "all",
    label: "Tất cả",
    tabContent: <AllReservationOrder />,
  },
  pending_confirm: {
    key: "pending_confirm",
    label: "Chờ xác nhận",
    tabContent: <ConfirmationPending />,
  },
  confirmed: {
    key: "confirmed",
    label: "Đã xác nhận",
    tabContent: <ConfirmedOrder />,
  },
  canceled: {
    key: "canceled",
    label: "Đã hủy",
    tabContent: <CanceledOrder />,
  },
};

const ReservationOrders = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.reservation_orders"));
  useTopPage();

  const [tabKey, setTabKey] = useState("all");

  return (
    <div className="w-full bg-bgPrimary">
      <div className="mx-auto max-w-screen-xl sm:px-3">
        <div className="space-y-4 py-4">
          <div className="rounded-sm bg-bgTertiary text-primary">
            <Tabs
              tabs={Object.values(tabs)}
              activeTab={tabKey}
              onChange={(key) => setTabKey(key)}
            />
          </div>
          <div className="space-y-4">{tabs[tabKey].tabContent}</div>
        </div>
      </div>
    </div>
  );
};

export default ReservationOrders;
