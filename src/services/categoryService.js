import axios from "../utils/axiosCustomize";

const getCategories = () => {
  return axios.get(`/api/v1/category/all`);
};

export { getCategories };
