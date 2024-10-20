import React, { useState } from "react";
import { Modal } from "antd";
import { MdOutlinePayment } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";

const ModalConfirmPayment = ({
  setOpenModalConfirmPayment,
  openModalConfirmPayment,
}) => {
  return (
    <>
      <Modal
        centered
        style={{ padding: "5px 20px", borderRadius: "0px" }}
        className="rounded-none p-5"
        open={openModalConfirmPayment}
        maskClosable={false}
        onOk={() => setOpenModalConfirmPayment(false)}
        onCancel={() => setOpenModalConfirmPayment(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        closable={true}
      >
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-2">
            <MdOutlinePayment className="text-lg sm:text-3xl" />
            <span className="text-sm font-semibold sm:text-xl">
              Bạn muốn thanh toán ?
            </span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <button
              onClick={() => setOpenModalConfirmPayment(false)}
              className="rounded-md bg-green-500 px-3 py-1.5 text-xs text-white sm:text-base"
            >
              Thanh toán ngay
            </button>
            <button
              onClick={() => setOpenModalConfirmPayment(false)}
              className="rounded-md bg-yellow-500 px-3 py-1.5 text-xs text-white sm:text-base"
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
