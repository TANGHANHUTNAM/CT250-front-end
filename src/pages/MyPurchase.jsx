import { useTranslation } from "react-i18next";
import { useDynamicTitle, useTopPage } from "../hooks";
import Tabs from "../components/tabs/Tabs";
import { useState } from "react";
import AllPurchases from "../components/purchase/AllPurchases";
import ConfirmationPending from "../components/purchase/ConfirmationPending";
import Shipping from "../components/purchase/Shipping";
import Completed from "../components/purchase/Completed";
import Cancelled from "../components/purchase/Cancelled";
import Preparing from "../components/purchase/Preparing";

const tabs = {
  all: {
    key: "all",
    label: "Tất cả",
    tabContent: <AllPurchases />,
    trans: "PurchasesPage.all",
  },
  pending_confirm: {
    key: "pending_confirm",
    label: "Chờ xác nhận",
    tabContent: <ConfirmationPending />,
    trans: "PurchasesPage.toConfirm",
  },
  preparing: {
    key: "preparing",
    label: "Đang chuẩn bị",
    tabContent: <Preparing />,
    trans: "PurchasesPage.toPrepare",
  },
  shipping: {
    key: "shipping",
    label: "Đang vận chuyển",
    tabContent: <Shipping />,
    trans: "PurchasesPage.toShip",
  },
  completed: {
    key: "completed",
    label: "Hoàn thành",
    tabContent: <Completed />,
    trans: "PurchasesPage.completed",
  },
  cancelled: {
    key: "cancelled",
    label: "Đã hủy",
    tabContent: <Cancelled />,
    trans: "PurchasesPage.cancelled",
  },
};

const MyPurchase = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.purchase"));
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

export default MyPurchase;
