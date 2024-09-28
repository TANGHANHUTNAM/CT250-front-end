import axios from "../utils/axiosCustomize";

const getUserInformation = (id) => {
  return axios.get(`/api/v1/account/${id}`);
};

export { getUserInformation };
