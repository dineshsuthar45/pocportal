import BaseAPI from './Base';

class RollingInventoryAPI extends BaseAPI {

  constructor() {
    super('/RollingInventory');
  }

  async getRollingInventoryList(payload: any) {        
    const { data } = await this.post(`get-list`, payload);
    return data;
  }

  async getLastTransDetail(payload: any) {        
    const { data } = await this.post(`get-last-trans-details`, payload);
    return data;
  }

  async getGetItemDetail(payload: any) {        
    const { data } = await this.post(`get-item-details`, payload);
    return data;
  }

  async getAddRollingInventory(payload: any) {        
    const { data } = await this.post(`add-rollinginventory`, payload);
    return data;
  }


  async getAddRollingInventoryImage(payload: any) {        
    const { data } = await this.post(`add-itemphoto-rollinginventory`, payload);
    return data;
  }
}

const instance = new RollingInventoryAPI();
export default instance;

// User/forgot-pin