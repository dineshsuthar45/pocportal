import axios from "axios";
import { BASE_URL } from "../../../axiosConfig";
// import env from '../../../../env';
// const { BASE_URL } = env;

class InterceptorManager {
  APIInstance: any;
  isRequestIntercepted: boolean = false;
  isResponseIntercepted: boolean = false;

  constructor() {
    this.APIInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getAPIInstance() {
    if (this.APIInstance) {
      return this.APIInstance;
    } else {
      this.APIInstance = axios.create({
        baseURL: BASE_URL,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return this.APIInstance;
    }
  }

  getInterceptor() {
    return this.getAPIInstance().interceptors;
  }

  interceptRequest(success: any, failure: any) {
    if (!this.isRequestIntercepted) {
      this.getInterceptor().request.use(success, failure);
      this.isRequestIntercepted = true;
    }
  }

  interceptResponse(success: any, failure: any) {
    if (!this.isResponseIntercepted) {
      this.getInterceptor().response.use(success, failure);
      this.isResponseIntercepted = true;
    }
  }
}

export default new InterceptorManager();
