import axios from "../utils/axiosCustomize";

export const getValidCouponByTotalOrder = (data) => {
  return axios.get(`/api/v1/coupon/valid?orderTotal=${data}`);
};

export const getPriceDiscountByCoupon = (data) => {
  return axios.post("/api/v1/coupon/apply", data);
};
