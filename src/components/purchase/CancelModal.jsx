import { Modal } from "antd";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import LoadingButton from "../buttons/LoadingButton";
import { useApi } from "../../hooks";
import { cancelOrder } from "../../services/orderService";
import StatusCodes from "../../utils/StatusCodes";
import { toast } from "react-toastify";

const CancelModal = ({
  show = false,
  setShow = () => {},
  data,
  setData = () => {},
  refetchOrder = () => {},
}) => {
  const { t } = useTranslation();

  const { loading, apiFunction: handleCancelOrder } = useApi(
    async (id) => await cancelOrder(id),
  );

  const handleOk = async () => {
    if (data) {
      const res = await handleCancelOrder(data?._id);

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        toast.success(res.EM);
        handleCancel();
        refetchOrder();
      }

      if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
        handleCancel();
        toast.error(res.EM);
      }
    }
  };

  const handleCancel = () => {
    setShow(false);
    setData(null);
  };

  return (
    <Modal
      open={show}
      onOk={handleOk}
      onCancel={handleCancel}
      closable={false}
      width={500}
      maskClosable={false}
      destroyOnClose={true}
      footer={() => (
        <div className="flex justify-center gap-3">
          <LoadingButton
            onClick={handleOk}
            label={t("Modal.ok")}
            loading={loading}
            loadingLabel={t("Modal.ok")}
            buttonClass="inline-flex items-center rounded-lg bg-red-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 sm:py-2.5 disabled:hover:bg-red-600 disabled:opacity-80"
          />
          <LoadingButton
            onClick={handleCancel}
            label={t("Modal.cancel")}
            loading={loading}
            loadingLabel={t("Modal.cancel")}
            loadingIconClass="!text-gray-900"
            buttonClass="rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5 disabled:hover:bg-white disabled:hover:text-gray-900 disabled:opacity-80"
          />
        </div>
      )}
    >
      <HiOutlineInformationCircle className="mx-auto mb-4 h-12 w-12 text-gray-400" />
      <h3 className="mb-5 px-4 text-center text-base font-normal text-gray-500 sm:text-lg">
        {t("PurchasesPage.deleteConfirm", { id: data?._id })}
      </h3>
    </Modal>
  );
};

export default CancelModal;
