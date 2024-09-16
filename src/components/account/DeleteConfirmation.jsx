import { useState } from "react";
import Checkbox from "../inputs/Checkbox";

const DeleteConfirmation = ({ setIsConfirmed }) => {
  const [agreement, setAgreement] = useState(false);

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2 text-sm">
        <div className="text-justify">
          Bạn đang yêu cầu xóa tài khoản của mình. Vui lòng lưu ý rằng:
        </div>
        <ul className="list-decimal space-y-2 pl-8">
          <li className="text-justify">
            Tất cả thông tin cá nhân, đơn hàng, và lịch sử giao dịch của bạn sẽ
            bị xóa vĩnh viễn.
          </li>
          <li className="text-justify">
            Sau khi tài khoản bị xóa, bạn sẽ không thể khôi phục lại bất kỳ dữ
            liệu nào.
          </li>
          <li className="text-justify">
            Nếu bạn có bất kỳ đơn hàng nào đang chờ xử lý, chúng sẽ bị hủy và
            không thể hoàn tất.
          </li>
          <li className="text-justify">
            Việc xóa tài khoản không thể hoàn tác.
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2.5">
        <Checkbox
          id="confirm_delete_checkbox"
          checked={agreement}
          onChange={(e) => setAgreement(e.target.checked)}
        />
        <label
          htmlFor="confirm_delete_checkbox"
          className="text-justify text-sm font-semibold"
        >
          Có, tôi muốn xóa vĩnh viễn tài khoản này và tất cả các dữ liệu của tài
          khoản.
        </label>
      </div>
      <div className="flex justify-end">
        <button
          className="cursor-pointer rounded-md bg-tertiary px-8 py-2.5 text-center text-sm font-medium hover:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-tertiary disabled:opacity-75 disabled:hover:bg-tertiary"
          disabled={!agreement}
          onClick={() => setIsConfirmed(true)}
        >
          Xóa bỏ
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
