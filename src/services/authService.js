import axios from "../utils/axiosCustomize";

const register = (data) => {
  return axios.post("/api/v1/auth/register", data);
};

const login = (data) => {
  return axios.post("/api/v1/auth/login", data);
};

const logout = (data) => {
  return axios.post("/api/v1/auth/logout", data);
};

const socialAuth = (data) => {
  return axios.post("/api/v1/auth/social-auth", data);
};

export { register, login, logout, socialAuth };
