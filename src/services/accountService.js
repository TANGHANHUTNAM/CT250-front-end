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

const editProfile = (id, data) => {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("fullname", data.fullname);
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("gender", data.gender);
  formData.append("birthday", data.birthday);
  formData.append("address", data.address);
  formData.append("avatar", data.avatar);

  return axios.put(`/api/v1/account/update/profile/${id}`, formData);
};

const verifyEmailWhenForgotPassword = (data) => {
  return axios.post(`/api/v1/account/forgot-password/send-code`, data);
};

const checkVerificationCode = (data) => {
  return axios.post(`/api/v1/account/forgot-password/check-code`, data);
};

const resetPassword = (data) => {
  return axios.post(`/api/v1/account/forgot-password/reset-password`, data);
};

export {
  getUserInformation,
  changePassword,
  checkConditionsToDelete,
  deleteAccount,
  editProfile,
  verifyEmailWhenForgotPassword,
  checkVerificationCode,
  resetPassword,
};
