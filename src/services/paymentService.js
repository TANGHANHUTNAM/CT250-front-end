import axios from "../utils/axiosCustomize";

export const getMethodsPayment = async () => {
  return await axios.get("/api/v1/order/get/payment-method");
};
