import axios from "../utils/axiosCustomize";

const addReservation = (data) => {
  return axios.post(`/api/v1/reservation/add`, data);
};

const getAllReservations = (id) => {
  return axios.get(`/api/v1/reservation/all/${id}`);
};

const getReservationsByStatus = (id, status) => {
  return axios.get(`/api/v1/reservation/${id}?status=${status}`);
};

export { addReservation, getAllReservations, getReservationsByStatus };
