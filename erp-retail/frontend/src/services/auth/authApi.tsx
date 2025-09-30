import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:8082/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

// API login
export const login = (usernameOrEmail: string, password: string) => {
  return authApi.post("/login", { usernameOrEmail, password });
};

// API refresh token
export const refreshToken = async () => {
  const refresh = localStorage.getItem("refreshToken");
  if (!refresh) throw new Error("No refresh token found");

  const { data } = await authApi.post("/refresh", { refreshToken: refresh });

  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);

  return data.accessToken;
};

// API logout
export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login";
};
