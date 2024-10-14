import axios from "../utils/axiosCustomize";

const getCategories = () => {
  return axios.get(`/api/v1/category/all`);
};

const getCategoriesAtOneLevel = (parentId = null) => {
  return axios.get(`/api/v1/category/get${parentId ? `/${parentId}` : ""}`);
};

const getCategoryById = (id) => {
  return axios.get(`/api/v1/category/${id}`);
};

export { getCategories, getCategoriesAtOneLevel, getCategoryById };
