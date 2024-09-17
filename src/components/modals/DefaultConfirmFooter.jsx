import { useTranslation } from "react-i18next";

const DefaultConfirmFooter = (handleOk = () => {}, handleCancel = () => {}) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center gap-3">
      <button
        type="button"
        className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 sm:py-2.5"
        onClick={handleOk}
      >
        {t("Modal.ok")}
      </button>
      <button
        type="button"
        className="rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5"
        onClick={handleCancel}
      >
        {t("Modal.cancel")}
      </button>
    </div>
  );
};

export default DefaultConfirmFooter;
