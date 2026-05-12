import api from "./axios";

export const getProfile = async () => {
  const res = await api.get("/auth/profile");
  return res.data.data.user;
};