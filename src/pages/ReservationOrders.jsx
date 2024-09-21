import { useTranslation } from "react-i18next";
import { useDynamicTitle, useTopPage } from "../hooks";
import Tabs from "../components/tabs/Tabs";
import { useState } from "react";

const tabs = {
  all: {
    key: "all",
    label: "Tất cả",
    tabContent: <div className="flex items-center gap-4">Tất cả</div>,
  },
  pending_confirm: {
    key: "pending_confirm",
    label: "Chờ xác nhận",
    tabContent: <div>Chờ xác nhận</div>,
  },
  confirmed: {
    key: "confirmed",
    label: "Đã xác nhận",
    tabContent: <div>Đã xác nhận</div>,
  },
  canceled: {
    key: "canceled",
    label: "Đã hủy",
    tabContent: <div>Đã hủy</div>,
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
          <div className="space-y-4">
            {/* {tabs[tabKey].tabContent} */}
            <div className="divide-y divide-dotted divide-white/15 rounded-sm bg-bgTertiary text-sm text-primary">
              <div className="divide-y divide-solid divide-white/10 px-3">
                <div className="flex items-center justify-between py-4">
                  <span className="text-13px">
                    <span className="font-semibold uppercase">Mã đơn: </span>
                    <span>66cf353a73abe7220a34ce7d</span>
                  </span>
                  <span className="hidden font-semibold uppercase text-tertiary sm:inline">
                    Chờ xác nhận
                  </span>
                </div>
                <div className="space-y-3 py-4">
                  <div className="flex items-center gap-4">
                    <span className="w-2/5 shrink-0 text-gray-200">
                      Người đặt
                    </span>
                    <span className="font-medium">Nguyễn Thiên Vũ</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-2/5 shrink-0 text-gray-200">
                      Số lượng
                    </span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-2/5 shrink-0 text-gray-200">
                      Ngày nhận bàn
                    </span>
                    <span className="font-medium">22/09/2024</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-[#0f2c29] px-3 py-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold uppercase text-tertiary sm:hidden">
                    Chờ xác nhận
                  </span>
                  <span className="text-xs text-gray-200 sm:text-sm">
                    21/09/2024
                  </span>
                </div>
                <button className="text-13px rounded-md bg-tertiary px-3 py-2 font-medium hover:bg-yellow-600">
                  Hủy đặt bàn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationOrders;
