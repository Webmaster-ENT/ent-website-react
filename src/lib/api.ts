import { API_CONFIG } from "@/constants/api";
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL ?? API_CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: API_CONFIG.TIMEOUT,
});

export default API;
