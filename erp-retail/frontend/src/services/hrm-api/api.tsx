import axios from "axios";
import { refreshToken, logout } from "../auth/authApi";

const api = axios.create({
  baseURL: "http://localhost:8081", // service HRM
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm access token vào mọi request
api.interceptors.request.use((config) => {
  const access = localStorage.getItem("accessToken");
  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }
  return config;
});

// Xử lý token hết hạn
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.status === 401) {
      try {
        const newAccess = await refreshToken();

        // gắn lại header cho request bị fail
        err.config.headers.Authorization = `Bearer ${newAccess}`;
        return api.request(err.config);
      } catch (refreshError) {
        logout();
      }
    }
    return Promise.reject(err);
  }
);

export default api;