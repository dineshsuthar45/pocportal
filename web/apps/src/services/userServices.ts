import { baseInstance } from "../config/axiosConfig";
import { ILoginSchema } from "../types";
import { LOGIN_URL } from "../util/constants";

export const loginAPI = async (payload: ILoginSchema) => {
  return await baseInstance.post(LOGIN_URL, payload);
};
