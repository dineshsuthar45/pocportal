import BaseAPI from './Base';

class LocationAPI extends BaseAPI {

  constructor() {
    super('/Location');
  }

  async getLocation() {
    const { data } = await this.get(`get-location`);
    return new Promise(resolve => {
      resolve(data);
    });
  }
}

const instance = new LocationAPI();
export default instance;

