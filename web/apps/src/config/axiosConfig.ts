import axios from "axios";
import {
  requestErrorHandler,
  requestHandler,
  responseErrorHandler,
  responseHandler,
} from "./interceptors";

export let BASE_URL = import.meta.env.VITE_APP_API_ENDPOINT;

export interface ILocaldata {
  username: string;
  role: string;
  token: string;
  userid: string;
  image_url: string;
  preferred_lng: string;
}

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/x-www-form-urlencoded",
};

const baseInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});

baseInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => responseErrorHandler(error)
);

const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    ...headers,
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

apiInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => requestErrorHandler(error)
);

apiInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => responseErrorHandler(error)
);

export { baseInstance, apiInstance };
