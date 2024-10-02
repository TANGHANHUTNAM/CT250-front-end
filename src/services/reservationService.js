import axios from "../utils/axiosCustomize";

const addReservation = (data) => {
  return axios.post(`/api/v1/reservation/add`, data);
};

const cancelReservation = (id) => {
  return axios.put(`/api/v1/reservation/cancel/${id}`);
};

const getAllReservations = (id) => {
  return axios.get(`/api/v1/reservation/all/account/${id}`);
};

const getReservationsByStatus = (id, status) => {
  return axios.get(`/api/v1/reservation/account/${id}?status=${status}`);
};

export {
  addReservation,
  cancelReservation,
  getAllReservations,
  getReservationsByStatus,
};
