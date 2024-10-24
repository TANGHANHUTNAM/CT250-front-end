import axios from "../utils/axiosCustomize";

const addNewReview = (orderId, reviews = []) => {
  return axios.post(`/api/v1/review/add`, { orderId, reviews });
};

const getReviewsForOrder = (orderId) => {
  return axios.get(`/api/v1/review/order/${orderId}`);
};

export { addNewReview, getReviewsForOrder };
