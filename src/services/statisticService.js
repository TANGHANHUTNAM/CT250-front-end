import axios from "../utils/axiosCustomize";

const getUsersAndDishesForHomePage = () => {
  return axios.get(`/api/v1/statistic/total-user-and-dish`);
};

export { getUsersAndDishesForHomePage };
