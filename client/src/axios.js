import axios from "axios";
const env = import.meta.env.VITE_TOKEN;
export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: "bearer " + env,
  },
});
