import axios, { AxiosRequestConfig } from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

request.interceptors.request.use(async (config: AxiosRequestConfig) => {
  config.headers!["Content-Type"] = "application/json";
  return config;
});

request.interceptors.response.use((response) => {
  return response;
});

export const client = request;