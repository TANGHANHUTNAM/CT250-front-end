import axios from "../utils/axiosCustomize";

const getOrdersForUserByStatus = (accountId, page = 1, limit = 10, status) => {
  return axios.get(`/api/v1/order/account/${accountId}`, {
    params: { page, limit, status },
  });
};

const getOrderById = (id) => {
  return axios.get(`/api/v1/order/${id}`);
};

const cancelOrder = (orderId) => {
  return axios.put(`/api/v1/order/cancel/${orderId}`);
};

const createPaymentURLToPay = async (orderId) => {
  return axios.post(`/api/v1/payment/create-payment-url`, { orderId });
};

export const createOrder = async (data) => {
  return await axios.post("/api/v1/order/add", data);
};

export const createUrlPayment = async (data) => {
  return await axios.post("/api/v1/payment/create-payment-url", data);
};

export const getOrderById = async (id) => {
  return await axios.get(`/api/v1/order/${id}`);
};

export {
  getOrdersForUserByStatus,
  getOrderById,
  cancelOrder,
  createPaymentURLToPay,
};
