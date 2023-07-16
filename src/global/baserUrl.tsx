import axios from "axios";
export const imageBaseUrl = "https://admin.omgeducation.com.au";
export const api = axios.create({
  baseURL: "https://admin.omgeducation.com.au",
});
