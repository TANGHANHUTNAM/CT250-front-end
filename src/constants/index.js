export const LIMIT_PAGE = 12;

export const ORDER_STATUS = {
  pending: "Chờ xác nhận",
  preparing: "Đang chuẩn bị",
  delivering: "Đang vận chuyển",
  completed: "Hoàn thành",
  canceled: "Đã hủy",
};

export const PAYMENT_METHOD = {
  COD: "Thanh toán khi nhận hàng",
  VNPAY: "Chuyển khoản qua VNPay",
};

export const PAYMENT_STATUS = {
  PAID: true, // Đã thanh toán
  NOT_YET_PAID: false, // Chưa thanh toán
};
