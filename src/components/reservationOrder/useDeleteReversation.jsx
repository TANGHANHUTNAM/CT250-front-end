import { useState } from "react";
import ConfirmModal from "../modals/ConfirmModal";
import { useTranslation } from "react-i18next";
import LoadingButton from "../buttons/LoadingButton";
import { useApi } from "../../hooks";
import { cancelReservation } from "../../services/reservationService";
import StatusCodes from "../../utils/StatusCodes";
import { toast } from "react-toastify";

const useDeleteReservation = (refetch = () => {}) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const { t } = useTranslation();

  const { loading, apiFunction } = useApi(
    async (id) => await cancelReservation(id),
  );

  const handleOk = async () => {
    const res = await apiFunction(data?._id || "");

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      handleCancel();
      toast.success("Hủy đơn đặt bàn thàn công!");
      refetch();
    }

    if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
      handleCancel();
      toast.error(res.EM);
    }
  };

  const handleCancel = () => {
    setData(null);
    setShow(false);
  };

  const handleOpenModal = (data = null) => {
    setShow(true);
    setData(data);
  };

  const Modal = ({}) => {
    return (
      <ConfirmModal
        show={show}
        handleOk={() => handleOk()}
        handleCancel={() => handleCancel()}
        content={t("ReservationOrderPage.deleteConfirm", {
          id: data?._id || "",
        })}
        footer={(handleOk, handleCancel) => (
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
            <button type="button" className="" onClick={handleCancel}></button>
          </div>
        )}
      />
    );
  };

  return { handleOpenModal, Modal };
};

export default useDeleteReservation;
