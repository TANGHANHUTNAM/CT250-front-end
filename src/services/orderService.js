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

const createOrder = async (data) => {
  return await axios.post("/api/v1/order/add", data);
};

const createUrlPayment = async (data) => {
  return await axios.post("/api/v1/payment/create-payment-url", data);
};

export {
  getOrdersForUserByStatus,
  getOrderById,
  cancelOrder,
  createOrder,
  createUrlPayment,
};
