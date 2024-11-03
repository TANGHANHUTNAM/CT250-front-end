import axios from "../utils/axiosCustomize";

const getNewsWithFilter = ({ sortBy, page = 1, limit = 12 }) => {
  return axios.get(`/api/v1/news/get`, { params: { sortBy, page, limit } });
};

const getNewsBySlug = (slug) => {
  return axios.get(`/api/v1/news/detail/${slug}`);
};

export { getNewsWithFilter, getNewsBySlug };
