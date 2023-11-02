import BaseAPI from './Base';

class LoginAPI extends BaseAPI {

  constructor() {
    super('/user');
  }

  async getLogin(payload: any) {        
    const { data } = await this.post(`authenticate`, payload);
    return data;
  }
}

const instance = new LoginAPI();
export default instance;

