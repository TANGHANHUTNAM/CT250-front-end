import axios from "../utils/axiosCustomize";

const getUserInformation = (id) => {
  return axios.get(`/api/v1/account/${id}`);
};

const changePassword = (id, data) => {
  return axios.put(`/api/v1/account/update/password/${id}`, data);
};

const checkConditionsToDelete = (id) => {
  return axios.get(`/api/v1/account/delete/check-conditions/${id}`);
};

const deleteAccount = (id, data) => {
  return axios.delete(`/api/v1/account/delete/${id}`, { data });
};

export {
  getUserInformation,
  changePassword,
  checkConditionsToDelete,
  deleteAccount,
};
