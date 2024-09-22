import { Modal } from "antd";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import DefaultConfirmFooter from "./DefaultConfirmFooter";
import { useTranslation } from "react-i18next";

const ConfirmModal = ({
  show = false,
  handleOk = () => {},
  handleCancel = () => {},
  footer = DefaultConfirmFooter,
  width = 500,
  content,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      open={show}
      onOk={handleOk}
      onCancel={handleCancel}
      closable={false}
      width={width}
      maskClosable={false}
      destroyOnClose={true}
      footer={() => footer(handleOk, handleCancel)}
      {...props}
    >
      <HiOutlineInformationCircle className="mx-auto mb-4 h-12 w-12 text-gray-400" />
      <h3 className="mb-5 px-4 text-center text-base font-normal text-gray-500 sm:text-lg">
        {content ? content : t("Modal.defaultContent")}
      </h3>
    </Modal>
  );
};

export default ConfirmModal;
