import { useTranslation } from "react-i18next";
import { useDynamicTitle, useTopPage } from "../hooks";
import Tabs from "../components/tabs/Tabs";
import { useState } from "react";

const tabs = {
  all: {
    key: "all",
    label: "Tất cả",
    tabContent: "hihi",
  },
  pending_confirm: {
    key: "pending_confirm",
    label: "Chờ xác nhận",
    tabContent: "<ConfirmationPending />",
  },
  shipping: {
    key: "shipping",
    label: "Đang vận chuyển",
    tabContent: "<ConfirmedOrder />",
  },
  completed: {
    key: "completed",
    label: "Hoàn thành",
    tabContent: "<ConfirmedOrder />",
  },
  canceled: {
    key: "canceled",
    label: "Đã hủy",
    tabContent: "<CanceledOrder />",
  },
};

const MyPurchase = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.purchase"));
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

            <div className="divide-y divide-dotted divide-white/20 rounded-sm bg-bgTertiary text-sm text-primary">
              <div className="flex items-center justify-between px-4 py-4 sm:px-6">
                <span className="text-13px">
                  <span className="font-semibold uppercase">Mã đơn. </span>
                  <span>66cf353a73abe7220a34ce7d</span>
                </span>
                <span className="hidden font-semibold uppercase text-tertiary sr-530:inline">
                  Chờ xác nhận
                </span>
              </div>
              <div className="cursor-pointer divide-y divide-solid divide-white/10 px-4 sm:px-6">
                <div className="flex gap-4 py-4">
                  <div className="h-16 w-16 shrink-0 sr-530:h-20 sr-530:w-20">
                    <img
                      src="https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1240f05c5ee174bcdaf47d5ec33197.jpg?v=1667882506833"
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex grow flex-col justify-between overflow-hidden text-sm sr-530:flex-row sr-530:items-center sr-530:gap-6">
                    <span className="font-medium max-sr-530:truncate">
                      Ba rọi nướng riềng mẻ
                    </span>
                    <div className="flex flex-col items-end gap-0.5 sr-530:flex-col-reverse sr-530:gap-0">
                      <span className="mt-2 hidden font-medium text-tertiary sr-530:inline">
                        191.00đ
                      </span>
                      <span>x1</span>
                      <span>
                        <span className="me-2 text-13px text-gray-300 line-through">
                          200.000đ
                        </span>
                        <span className="font-medium text-tertiary sr-530:text-primary">
                          191.00đ
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 py-4">
                  <div className="h-16 w-16 shrink-0 sr-530:h-20 sr-530:w-20">
                    <img
                      src="https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1240f05c5ee174bcdaf47d5ec33197.jpg?v=1667882506833"
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex grow flex-col justify-between overflow-hidden text-sm sr-530:flex-row sr-530:items-center">
                    <span className="font-medium max-sr-530:truncate">
                      Ba rọi nướng riềng mẻ
                    </span>
                    <div className="flex flex-col items-end gap-0.5 sr-530:flex-col-reverse sr-530:gap-0">
                      <span className="mt-2 hidden font-medium text-tertiary sr-530:inline">
                        191.00đ
                      </span>
                      <span>x1</span>
                      <span>
                        <span className="me-2 text-13px text-gray-300 line-through">
                          200.000đ
                        </span>
                        <span className="font-medium text-tertiary sr-530:text-primary">
                          191.00đ
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 py-4">
                  <div className="h-16 w-16 shrink-0 sr-530:h-20 sr-530:w-20">
                    <img
                      src="https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1240f05c5ee174bcdaf47d5ec33197.jpg?v=1667882506833"
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex grow flex-col justify-between overflow-hidden text-sm sr-530:flex-row sr-530:items-center">
                    <span className="font-medium max-sr-530:truncate">
                      Ba rọi nướng riềng mẻ
                    </span>
                    <div className="flex flex-col items-end gap-0.5 sr-530:flex-col-reverse sr-530:gap-0">
                      <span className="mt-2 hidden font-medium text-tertiary sr-530:inline">
                        191.00đ
                      </span>
                      <span>x1</span>
                      <span>
                        <span className="me-2 text-13px text-gray-300 line-through">
                          200.000đ
                        </span>
                        <span className="font-medium text-tertiary sr-530:text-primary">
                          191.00đ
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-[#0f2c29] px-4 py-3 sm:px-6 md:py-4">
                <span className="text-xs">2 món ăn</span>
                <div className="flex items-center gap-1.5">
                  <span>Thành tiền:</span>
                  <span className="text-[15px] font-semibold text-tertiary sr-530:text-lg md:text-xl">
                    191.000đ
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 bg-[#0f2c29] px-4 py-3 sr-530:justify-end sm:px-6 md:py-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium text-tertiary sr-530:hidden">
                    Chờ xác nhận
                  </span>
                </div>
                <button className="rounded bg-tertiary px-8 py-2.5 text-13px font-medium hover:bg-yellow-600">
                  Mua lại
                </button>
                <button className="hidden rounded bg-primary px-8 py-2.5 text-13px font-medium text-gray-900 hover:bg-gray-200 sr-530:block">
                  Xem đánh giá
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPurchase;
