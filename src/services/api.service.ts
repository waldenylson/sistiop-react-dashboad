import axios from "axios";

const api = axios.create({
  baseURL: "http://10.80.33.37:8000",
});

export default api;
