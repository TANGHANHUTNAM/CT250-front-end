import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import { getReviewsForOrder } from "../../services/reviewService";
import StatusCodes from "../../utils/StatusCodes";

const ReviewModal = ({ show = false, handleClose = () => {}, orderId }) => {
  const { t } = useTranslation();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (orderId) {
      const getReviews = async () => {
        const res = await getReviewsForOrder(orderId);

        if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
          setReviews(res.DT);
        }

        if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
          setReviews([]);
        }
      };

      getReviews();
    }
  }, [orderId]);

  return (
    <Modal
      open={show}
      closable={false}
      width={720}
      maskClosable={false}
      destroyOnClose={true}
      footer={() => (
        <div className="flex items-center justify-end">
          <button
            className="rounded-md border border-gray-200 bg-gray-50 px-10 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5"
            onClick={() => handleClose()}
          >
            OK
          </button>
        </div>
      )}
      styles={{
        content: {
          borderRadius: "0.125rem",
        },
      }}
    >
      <h2 className="pb-4 text-xl font-semibold">{t("ReviewModal.title")}</h2>
      <div className="divide-y divide-solid divide-gray-300">
        {reviews.length > 0 &&
          reviews.map((review, i) => {
            return (
              <div
                key={`review-see-${i}-${review?._id}`}
                className="space-y-4 py-4"
              >
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 shrink-0">
                    <img
                      src={review?.dishImage}
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex grow flex-col text-sm">
                    <span className="font-medium max-sr-530:truncate">
                      {review?.dishName}
                    </span>
                    <span>x{review?.quantity}</span>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="space-y-1">
                    <span className="flex items-center">
                      {(() => {
                        const star = +review?.rating;
                        let startHtml = [];

                        for (let i = 1; i <= star; i++) {
                          startHtml.push(
                            <FaStar
                              key={`star-${i}-${review?._id}`}
                              className="text-yellow-400"
                            />,
                          );
                        }
                        for (let i = star + 1; i <= 5; i++) {
                          startHtml.push(
                            <FaStar
                              key={`star-${i}-${review?._id}`}
                              className="text-gray-300"
                            />,
                          );
                        }

                        return startHtml;
                      })()}
                    </span>
                    <p className="text-13px text-gray-600">
                      {review?.rateDate}
                    </p>
                  </div>
                  <div className="text-sm text-gray-900">{review?.review}</div>
                </div>
              </div>
            );
          })}
      </div>
    </Modal>
  );
};

export default ReviewModal;
