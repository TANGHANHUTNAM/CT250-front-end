import { Modal } from "antd";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAll } from "../../redux/reducer/cartSlice";
const ModalConfirmPayment = ({
  vnpayUrl,
  setVnpayUrl,
  setOpenModalConfirmPayment,
  openModalConfirmPayment,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePaymentNow = () => {
    if (!vnpayUrl) {
      toast.error("Đã có lỗi xảy ra, vui lòng thử lại sau");
      return;
    }
    setOpenModalConfirmPayment(false);
    window.location.replace(vnpayUrl);
    setVnpayUrl("");
  };

  const handlePaymentLater = () => {
    if (!vnpayUrl) {
      toast.error("Đã có lỗi xảy ra, vui lòng thử lại sau");
      return;
    }
    setOpenModalConfirmPayment(false);
    navigate("/account/purchase");
    setVnpayUrl("");
    dispatch(removeAll());
    toast.success("Đặt hàng thành công");
  };
  return (
    <>
      <Modal
        centered
        style={{ padding: "10px 25px", borderRadius: "10px" }}
        className="rounded-lg p-5 shadow-xl"
        open={openModalConfirmPayment}
        maskClosable={false}
        onOk={() => setOpenModalConfirmPayment(false)}
        onCancel={() => setOpenModalConfirmPayment(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        closable={false}
      >
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-3">
            <IoMdInformationCircleOutline className="text-2xl text-gray-700 sm:text-4xl" />
            <span className="text-lg font-bold sm:text-2xl">
              Bạn muốn thanh toán?
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => {
                handlePaymentNow();
              }}
              className="transform rounded-lg bg-green-500 px-5 py-2 text-sm text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-600 sm:text-lg"
            >
              Thanh toán ngay
            </button>
            <button
              onClick={() => {
                handlePaymentLater();
              }}
              className="transform rounded-lg bg-yellow-500 px-5 py-2 text-sm text-white shadow-lg transition-transform hover:scale-105 hover:bg-yellow-600 sm:text-lg"
            >
              Thanh toán sau
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalConfirmPayment;
