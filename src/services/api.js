import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Use proxy from vite.config.js
});

export default api;
