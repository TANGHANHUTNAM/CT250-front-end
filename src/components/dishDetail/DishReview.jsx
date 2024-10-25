import { FaStar } from "react-icons/fa";
import Avatar from "../avatar/Avatar";
import Pagination from "../pagination/Pagination";
import { useTranslation } from "react-i18next";
import { formatQuantity } from "../../utils/format";
import { useEffect, useState } from "react";
import _ from "lodash";
import { getReviewsForDish } from "../../services/reviewService";
import StatusCodes from "../../utils/StatusCodes";

const REVIEWS_LIMIT = 6;

const DishReview = ({ dish = {} }) => {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({
    averageRating: 0,
    ratingSummary: [],
    totalRatings: 0,
    totalPages: 0,
    reviews: [],
  });

  useEffect(() => {
    if (!_.isEmpty(dish)) {
      const getReviews = async () => {
        const res = await getReviewsForDish(
          dish?._id,
          currentPage,
          REVIEWS_LIMIT,
        );

        if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
          setData({
            averageRating: res?.DT?.averageRating,
            ratingSummary: res?.DT?.ratingSummary,
            totalRatings: res?.DT?.totalRatings,
            totalPages: res?.DT?.reviews?.totalPages,
            reviews: res?.DT?.reviews?.data,
          });
        }
      };

      getReviews();
    }
  }, [currentPage]);

  return (
    <div className="divide-y divide-solid divide-white/20 rounded-sm bg-bgTertiary text-primary">
      <div className="space-y-4 px-4 py-6 lg:px-6">
        <p className="text-base font-semibold lg:text-lg">
          {t("DishDetailPage.dishReview")}
        </p>
        <div className="flex gap-4">
          <div className="flex w-fit shrink-0 flex-col items-center justify-center gap-2 lg:w-40">
            <div className="text-4xl font-medium">
              {data.averageRating}
              <span className="text-xl">/5</span>
            </div>
            <div className="inline-flex items-center">
              <div className="relative flex text-gray-200">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="h-4 w-4 shrink-0" />
                ))}
                <div
                  className="absolute left-0 top-0 flex overflow-hidden whitespace-nowrap text-yellow-400"
                  style={{ width: `${(data.averageRating * 100) / 5}%` }}
                >
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="h-4 w-4 shrink-0" />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-200">
              ({formatQuantity(data.totalRatings)} {t("DishDetailPage.review")})
            </div>
          </div>
          <div className="grow space-y-1 text-sm">
            {data.ratingSummary.map((rating, i) => {
              return (
                <div
                  key={`rating-percentage-${i}`}
                  className="flex items-center justify-start"
                >
                  <span className="w-10 text-right">
                    {rating?.rating} {t("DishDetailPage.star")}
                  </span>
                  <div className="mx-2.5 h-1 grow rounded-md bg-gray-400">
                    <div
                      className="h-full rounded-md bg-tertiary"
                      style={{ width: `${rating?.percentage}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-left">{rating?.percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {data.reviews.map((item, index) => {
        return (
          <div
            key={`review-${index}-${item?._id}`}
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
                src={item?.accountAvatar}
              />
            </div>
            <div className="grow space-y-2.5">
              <div className="flex justify-between">
                <div className="flex flex-col gap-0.5">
                  <div className="text-sm font-medium">{item?.accountName}</div>
                  <div className="inline-flex items-center">
                    {(() => {
                      const star = +item?.rating;
                      let startHtml = [];

                      for (let i = 1; i <= star; i++) {
                        startHtml.push(
                          <FaStar
                            key={`star-${i}-${item?._id}`}
                            className="text-yellow-400"
                          />,
                        );
                      }
                      for (let i = star + 1; i <= 5; i++) {
                        startHtml.push(
                          <FaStar
                            key={`star-${i}-${item?._id}`}
                            className="text-gray-300"
                          />,
                        );
                      }

                      return startHtml;
                    })()}
                  </div>
                </div>
                <span className="text-xs">{item?.rateDate}</span>
              </div>
              <div className="text-13px">{item?.review}</div>
            </div>
          </div>
        );
      })}

      {data.totalPages > 1 && (
        <div className="px-4 py-6">
          <Pagination
            currentPage={currentPage}
            totalPages={data.totalPages}
            onChangePage={(page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
};

export default DishReview;
