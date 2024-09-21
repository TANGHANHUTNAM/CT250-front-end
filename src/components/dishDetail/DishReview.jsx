import { FaStar } from "react-icons/fa";
import Avatar from "../avatar/Avatar";
import Pagination from "../pagination/Pagination";
import { useTranslation } from "react-i18next";
import { formatQuantity } from "../../utils/format";

const data = [1, 2, 3, 4];

const DishReview = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="divide-y divide-solid divide-white/20 rounded-sm bg-bgTertiary text-primary">
      <div className="space-y-4 px-4 py-6 lg:px-6">
        <p className="text-base font-semibold lg:text-lg">
          {t("DishDetailPage.dishReview")}
        </p>
        <div className="flex gap-4">
          <div className="flex w-fit shrink-0 flex-col items-center justify-center gap-2 lg:w-40">
            <div className="text-4xl font-medium">
              4<span className="text-xl">/5</span>
            </div>
            <div className="inline-flex items-center">
              <FaStar className="h-4 w-4 text-yellow-400" />
              <FaStar className="h-4 w-4 text-yellow-400" />
              <FaStar className="h-4 w-4 text-yellow-400" />
              <FaStar className="h-4 w-4 text-yellow-400" />
              <FaStar className="h-4 w-4" />
            </div>
            <div className="text-sm text-gray-200">
              ({formatQuantity(3000)} {t("DishDetailPage.review")})
            </div>
          </div>
          <div className="grow space-y-1 text-sm">
            <div className="flex items-center justify-start">
              <span className="w-10 text-right">
                5 {t("DishDetailPage.star")}
              </span>
              <div className="mx-2.5 h-1 grow rounded-md bg-gray-400">
                <div
                  className="h-full rounded-md bg-tertiary"
                  style={{ width: "96%" }}
                ></div>
              </div>
              <span className="w-10 text-left">96%</span>
            </div>
            <div className="flex items-center justify-start">
              <span className="w-10 text-right">
                4 {t("DishDetailPage.star")}
              </span>
              <div className="mx-2.5 h-1 grow rounded-md bg-gray-400">
                <div
                  className="h-full rounded-md bg-tertiary"
                  style={{ width: "4%" }}
                ></div>
              </div>
              <span className="w-10 text-left">4%</span>
            </div>
            <div className="flex items-center justify-start">
              <span className="w-10 text-right">
                3 {t("DishDetailPage.star")}
              </span>
              <div className="mx-2.5 h-1 grow rounded-md bg-gray-400">
                <div
                  className="h-full rounded-md bg-tertiary"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span className="w-10 text-left">0%</span>
            </div>
            <div className="flex items-center justify-start">
              <span className="w-10 text-right">
                2 {t("DishDetailPage.star")}
              </span>
              <div className="mx-2.5 h-1 grow rounded-md bg-gray-400">
                <div
                  className="h-full rounded-md bg-tertiary"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span className="w-10 text-left">0%</span>
            </div>
            <div className="flex items-center justify-start">
              <span className="w-10 text-right">
                1 {t("DishDetailPage.star")}
              </span>
              <div className="mx-2.5 h-1 grow rounded-md bg-gray-400">
                <div
                  className="h-full rounded-md bg-tertiary"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span className="w-10 text-left">0%</span>
            </div>
          </div>
        </div>
      </div>

      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-start gap-3 px-4 py-6 lg:px-6"
            >
              <div className="shrink-0">
                <Avatar
                  size={{
                    xs: 32,
                    sm: 32,
                    md: 38,
                    lg: 38,
                    xl: 38,
                    xxl: 38,
                  }}
                />
              </div>
              <div className="grow space-y-2.5">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm font-medium">Thiên Vũ</div>
                    <div className="inline-flex items-center">
                      <FaStar className="h-3 w-3 text-yellow-400" />
                      <FaStar className="h-3 w-3 text-yellow-400" />
                      <FaStar className="h-3 w-3 text-yellow-400" />
                      <FaStar className="h-3 w-3 text-yellow-400" />
                      <FaStar className="h-3 w-3" />
                    </div>
                  </div>
                  <span className="text-xs">20/09/2024</span>
                </div>
                <div className="text-13px">
                  Salad rau mùa sốt cam là sự lựa chọn tuyệt vời cho các tín đồ
                  yêu eat clean. Món ăn có đến 5 loại xà lách.
                </div>
              </div>
            </div>
          );
        })}

      {data && data.length > 0 && (
        <div className="px-4 py-6">
          <Pagination totalPages={5} />
        </div>
      )}
    </div>
  );
};

export default DishReview;
