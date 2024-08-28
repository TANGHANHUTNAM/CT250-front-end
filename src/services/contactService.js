import axios from "../utils/axiosCustomize";

const contact = (data) => {
  return axios.post("/api/v1/contact/create", data);
};

export { contact };
