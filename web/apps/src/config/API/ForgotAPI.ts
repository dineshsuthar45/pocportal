import BaseAPI from './Base';

class ForgotAPI extends BaseAPI {

  constructor() {
    super('/User');
  }

  async getChangePin(payload: any) {        
    const { data } = await this.post(`change-pin`, payload);
    return data;
  }

  async getForgotUserValidate(payload: any) {        
    const { data } = await this.post(`forgot-user-validate`, payload);
    return data;
  }

  async getForgotPin(payload: any) {        
    const { data } = await this.post(`forgot-pin`, payload);
    return data;
  }

}

const instance = new ForgotAPI();
export default instance;