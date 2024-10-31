import { Modal } from "antd";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Rate } from "antd";
import _ from "lodash";
import { toast } from "react-toastify";
import LoadingButton from "../buttons/LoadingButton";
import { addNewReview } from "../../services/reviewService";
import StatusCodes from "../../utils/StatusCodes";

const RateModal = ({
  show = false,
  handleClose = () => {},
  dishes = [],
  orderId,
  refetchOrder = () => {},
}) => {
  const { t } = useTranslation();

  const [ratings, setRatings] = useState(
    (() => {
      const rating = {};
      dishes.forEach((dish) => {
        rating[dish?._id] = {
          dishId: dish?._id,
          rating: 0,
          review: "",
        };
      });

      return rating;
    })(),
  );
  const [loading, setLoading] = useState(false);

  const checkRatings = (ratings = {}) => {
    let valid = true;
    for (let item of Object.values(ratings)) {
      if (item?.rating <= 0) {
        valid = false;
        break;
      }
    }

    return valid;
  };

  const isValid = useMemo(() => checkRatings(ratings), [ratings]);

  const handleChangeRate = (id, rating) => {
    setRatings((prev) => {
      const newRatings = _.cloneDeep(prev);
      const ratingWithID = newRatings[id] ?? {};

      return { ...newRatings, [id]: { ...ratingWithID, rating: rating } };
    });
  };

  const handleChangeReview = (id, review) => {
    setRatings((prev) => {
      const newRatings = _.cloneDeep(prev);
      const ratingWithID = newRatings[id] ?? {};

      return { ...newRatings, [id]: { ...ratingWithID, review: review } };
    });
  };

  const handleSubmitReview = async () => {
    const isValid = checkRatings(ratings);

    if (isValid && orderId) {
      const data = Object.values(ratings);

      setLoading(true);
      const res = await addNewReview(orderId, data);

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        toast.success(t("ReviewModal.successMessage"));
        handleClose();
        refetchOrder();
      }

      if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
        toast.error(res.EM);
      }
      setLoading(false);
    } else {
      toast.warning(t("ReviewModal.errorMessage"));
    }
  };

  return (
    <Modal
      open={show}
      closable={false}
      width={720}
      maskClosable={false}
      destroyOnClose={true}
      footer={() => (
        <div className="flex items-center justify-end gap-3">
          <LoadingButton
            label={t("ReviewModal.cancel")}
            loading={loading}
            loadingIconClass="!text-black"
            buttonClass="rounded-md border border-gray-200 bg-gray-50 px-10 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5"
            onClick={() => handleClose()}
          />

          {isValid && (
            <LoadingButton
              label={t("ReviewModal.submitReview")}
              loading={loading}
              buttonClass="rounded-md bg-tertiary px-10 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:z-10 focus:outline-none focus:ring-4 focus:ring-yellow-100 sm:py-2.5"
              onClick={() => handleSubmitReview()}
            />
          )}
        </div>
      )}
      styles={{
        content: {
          borderRadius: "0.125rem",
        },
      }}
    >
      <h2 className="text-xl font-semibold">{t("ReviewModal.title")}</h2>
      <div className="divide-y divide-solid divide-gray-300">
        {dishes &&
          dishes.length > 0 &&
          dishes.map((dish, i) => {
            return (
              <div
                key={`review-${i}-${dish?._id}`}
                className="space-y-2.5 py-6"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 shrink-0">
                    <img
                      src={dish?.image}
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex grow items-center justify-between text-sm">
                    <span className="text-base font-medium">{dish?.name}</span>
                    <span className="text-tertiary">x{dish?.quantity}</span>
                  </div>
                </div>
                <div className="flex grow items-start gap-6">
                  <div className="shrink-0 space-y-2 text-center">
                    <div className="font-semibold">{t("ReviewModal.quality")}</div>
                    <Rate
                      onChange={(value) => handleChangeRate(dish?._id, value)}
                    />
                  </div>
                  <div className="grow">
                    <textarea
                      rows="3"
                      spellCheck={false}
                      className="block w-full rounded border border-gray-300 p-2.5 text-sm text-gray-900 outline-none focus:border-tertiary focus:ring-tertiary"
                      placeholder={t("ReviewModal.textareaPlaceholder")}
                      onChange={(e) =>
                        handleChangeReview(dish?._id, e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Modal>
  );
};

export default RateModal;
