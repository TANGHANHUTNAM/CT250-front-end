import axios from "../utils/axiosCustomize";

const addNewReview = (orderId, reviews = []) => {
  return axios.post(`/api/v1/review/add`, { orderId, reviews });
};

const getReviewsForOrder = (orderId) => {
  return axios.get(`/api/v1/review/order/${orderId}`);
};

const getReviewsForDish = (dishId, page = 1, limit = 10) => {
  return axios.get(`/api/v1/review/dish/${dishId}?page=${page}&limit=${limit}`);
};

export { addNewReview, getReviewsForOrder, getReviewsForDish };
