import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const PurchaseItem = ({}) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/account/purchase/order/${1}`);
  };

  return (
    <div className="divide-y divide-dotted divide-white/20 rounded-sm bg-bgTertiary text-sm text-primary">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <span className="text-13px">
          <span className="font-semibold uppercase">
            {t("PurchasesPage.orderId")}.{" "}
          </span>
          <span>66cf353a73abe7220a34ce7d</span>
        </span>
        <span className="hidden font-semibold uppercase text-tertiary sr-530:inline">
          Chờ xác nhận
        </span>
      </div>
      <div
        className="cursor-pointer divide-y divide-solid divide-white/10 px-4 sm:px-6"
        onClick={() => goToDetail()}
      >
        <div className="flex gap-4 py-2.5">
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
        <div className="flex gap-4 py-2.5">
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
        <div className="py-2.5 text-center text-13px text-gray-300">
          {t("PurchasesPage.seeMore")}
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#0f2c29] px-4 py-3 sm:px-6">
        <span className="text-xs sr-530:text-13px">
          2 {t("PurchasesPage.dish")}
        </span>
        <div className="flex items-center gap-1.5">
          <span>{t("PurchasesPage.orderTotal")}:</span>
          <span className="text-[15px] font-semibold text-tertiary sr-530:text-lg md:text-xl">
            191.000đ
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 bg-[#0f2c29] px-4 py-3 sr-530:justify-end sm:px-6">
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-tertiary sr-530:hidden">
            Chờ xác nhận
          </span>
        </div>
        <button className="rounded bg-tertiary px-8 py-2.5 text-13px font-medium hover:bg-yellow-600">
          {t("PurchasesPage.buyAgain")}
        </button>
        <button className="hidden rounded bg-primary px-8 py-2.5 text-13px font-medium text-gray-900 hover:bg-gray-200 sr-530:block">
          {t("PurchasesPage.viewRating")}
        </button>
      </div>
    </div>
  );
};

export default PurchaseItem;
