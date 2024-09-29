import axios from "../utils/axiosCustomize";

const getDishes = () => {
  return axios.get(`/api/v1/dish/all`);
};

const getDishesWithPagination = (page = 1, limit = 20) => {
  return axios.get(`/api/v1/dish?page=${page}&limit=${limit}`);
};

const getDish = (id) => {
  return axios.get(`/api/v1/dish/${id}`);
};

export { getDishes, getDishesWithPagination, getDish };
