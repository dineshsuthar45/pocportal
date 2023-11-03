import { ILogindata } from "../store/reducers/authSlice";
import { LOCALSTORAGE_VARIABLE } from "../util/constants";

import { toast } from "react-toastify";

export const getLocalAuth = (): ILogindata | null => {
  const storedAuth = localStorage.getItem(LOCALSTORAGE_VARIABLE);
  const authLocal: ILogindata =
    storedAuth !== null ? JSON.parse(storedAuth) : null;
  return authLocal;
};

const requestHandler = (request: any) => {
  request.headers.Authorization = `Bearer ${getLocalAuth()?.access_token}`;
  request.headers["Access-Control-Allow-Origin"] = "*";
  return request;
};

const requestErrorHandler = (err: any) => {
  return Promise.reject(err);
};

const responseHandler = (response: any) => {
  return Promise.resolve(response);
};

const responseErrorHandler = (error: any) => {
  if (error.code === "ECONNABORTED") {
    toast.error(error.message);
  } else if (error.code === "ERR_NETWORK") {
    toast.error("Internet connection problem.");
  } else if (error?.response?.status >= 400 && error?.response?.status <= 499) {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = `/login?message=${encodeURIComponent(
        "Unauthorized"
      )}&&path=${JSON.stringify(window.location)}`;
    } else if (error.response?.data?.Message) {
      error.code = "RES_ERROR";
    }
  } else if (error?.response?.status >= 500) {
    if (error.response?.data?.Message) {
      toast.error(error.response?.data.Message ?? "Internal Server Error");
    } else {
      toast.error("Internal Server Error");
    }
  }
  return Promise.reject(error);
};

export {
  requestHandler,
  requestErrorHandler,
  responseHandler,
  responseErrorHandler,
};
