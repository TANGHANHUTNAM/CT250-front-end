import axios from "../utils/axiosCustomize";

const getOrdersForUserByStatus = (accountId, page = 1, limit = 10, status) => {
  return axios.get(`/api/v1/order/account/${accountId}`, {
    params: { page, limit, status },
  });
};

const getOrderById = (id) => {
  return axios.get(`/api/v1/order/${id}`);
};

export { getOrdersForUserByStatus, getOrderById };
