import { Modal } from "antd";
import { useTranslation } from "react-i18next";
import { FaCircleCheck, FaCircleXmark, FaCircleInfo } from "react-icons/fa6";

const types = {
  success: "success",
  error: "error",
  warning: "warning",
};

const Title = ({ type = types.success, title = "Title" }) => {
  return (
    <div className="flex items-center gap-2.5">
      <span>
        {type === types.success && (
          <FaCircleCheck className="h-5 w-5 text-green-500" />
        )}
        {type === types.error && (
          <FaCircleXmark className="h-5 w-5 text-red-500" />
        )}
        {type === types.warning && (
          <FaCircleInfo className="h-5 w-5 text-yellow-500" />
        )}
      </span>
      <span className="text-base">{title}</span>
    </div>
  );
};

const NotificationModal = ({
  show = false,
  handleClose = () => {},
  title,
  type = types.success,
  content,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      title={<Title type={type} title={title} />}
      open={show}
      closable={false}
      width={600}
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
          borderRadius: "0.25rem",
        },
      }}
    >
      {content}
    </Modal>
  );
};

export default NotificationModal;
