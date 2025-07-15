import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getUsers = async () => {
  const { data } = await API.get("/users");

  return data;
};

export const addUser = async (name) => {
  const { data } = await API.post("/users", { name });

  return data;
};

export const claimPoints = async (userId) => {
  const { data } = await API.post(`/claim/${userId}`);

  return data;
};

export const getLeaderboard = async () => {
  const { data } = await API.get("/leaderboard");

  return data;
};

export const getHistory = async () => {
  const { data } = await API.get("/claim/history");

  return data;
};
