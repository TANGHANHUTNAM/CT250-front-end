import ConfirmModal from "../modals/ConfirmModal";
import { useTranslation } from "react-i18next";
import LoadingButton from "../buttons/LoadingButton";
import { useApi } from "../../hooks";
import { deleteAccount } from "../../services/accountService";
import StatusCodes from "../../utils/StatusCodes";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from "../../redux/reducer/userSlice";

const DeleteModal = ({ show = false, setShow = () => {}, data = null }) => {
  const { t } = useTranslation();

  const { loading, apiFunction: handleDeleteAccount } = useApi(
    async (id, data) => await deleteAccount(id, data),
  );

  const { id } = useSelector((state) => state.user.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOk = async () => {
    const res = await handleDeleteAccount(id, data);

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      const handleSuccess = async () => {
        handleCancel();
        toast.success("Xóa tài khoản thành công!");
        dispatch(logoutSuccess());
      };
      await handleSuccess();
      navigate("/");
    }
    if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
      handleCancel();
      toast.error(res.EM);
    }
  };

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <ConfirmModal
      show={show}
      handleOk={() => handleOk()}
      handleCancel={() => handleCancel()}
      content={t("ManageAccount.deleteAccountPage.finishConfirm")}
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

export default DeleteModal;
