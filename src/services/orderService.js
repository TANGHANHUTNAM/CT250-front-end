import axios from "../utils/axiosCustomize";

export const createOrder = async (data) => {
  return await axios.post("/api/v1/order/add", data);
};

export const createUrlPayment = async (data) => {
  return await axios.post("/api/v1/payment/create-payment-url", data);
};

export const getOrderById = async (id) => {
  return await axios.get(`/api/v1/order/${id}`);
};
