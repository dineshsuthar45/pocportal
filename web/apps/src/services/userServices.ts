import { baseInstance } from "../config/axiosConfig";
import { ILoginSchema } from "../pages/Login/Login.hooks";
import { LOGIN_URL } from "../util/constants";

export const loginAPI = async (payload: ILoginSchema) => {
  return await baseInstance.post(LOGIN_URL, {
    ...payload,
    grant_type: "password",
  });
};
