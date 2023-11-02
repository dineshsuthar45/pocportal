import BaseAPI from './Base';

class LocationItemDetailAPI extends BaseAPI {

  constructor() {
    super('/LocationMovement');
  }

  async getLocationItemDetail(payload: any) {        
    const { data } = await this.post(`get-item-details`, payload);
    return data;
  }

  async getLocationItemUpdate(payload: any) {        
    const { data } = await this.post(`update-item-location`, payload);
    return data;
  }
}

const instance = new LocationItemDetailAPI();
export default instance;

// User/forgot-pin