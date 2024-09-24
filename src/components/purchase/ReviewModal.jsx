import { Modal } from "antd";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

const ReviewModal = ({ show = false, handleClose = () => {}, review = {} }) => {
  const { t } = useTranslation();

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
        <div className="space-y-4 py-4">
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 shrink-0">
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1240f05c5ee174bcdaf47d5ec33197.jpg?v=1667882506833"
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="flex grow flex-col text-sm">
              <span className="font-medium max-sr-530:truncate">
                Ba rọi nướng riềng mẻ
              </span>
              <span>x1</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="space-y-1">
              <span className="flex items-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-gray-300" />
              </span>
              <p className="text-13px text-gray-600">24/09/2024</p>
            </div>
            <div className="text-sm text-gray-900">
              Ngon lắm nha!!! Ngon lắm nha!!! Ngon lắm nha!!! Ngon lắm nha!!!
            </div>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 shrink-0">
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1240f05c5ee174bcdaf47d5ec33197.jpg?v=1667882506833"
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="flex grow flex-col text-sm">
              <span className="font-medium max-sr-530:truncate">
                Ba rọi nướng riềng mẻ
              </span>
              <span>x1</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="space-y-1">
              <span className="flex items-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-gray-300" />
              </span>
              <p className="text-13px text-gray-600">24/09/2024</p>
            </div>
            <div className="text-sm text-gray-900">
              Ngon lắm nha!!! Ngon lắm nha!!! Ngon lắm nha!!! Ngon lắm nha!!!
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModal;
