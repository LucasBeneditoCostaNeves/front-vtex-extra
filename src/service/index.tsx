import axios from "axios";

export const api = axios.create({
  baseURL: "https://vtex-back2.onrender.com/api/",
  timeout: 7000,
});
