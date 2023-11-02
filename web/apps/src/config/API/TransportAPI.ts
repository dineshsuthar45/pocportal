import BaseAPI from './Base';

class TransportAPI extends BaseAPI {

  constructor() {
    super('/transport');
  }

  async getTripList(payload: any) {
    const { data } = await this.post(`get-trip-list`, payload);
    return new Promise(resolve => {
      resolve(data);
    });
  }

  async getMasterList() {
    const { data } = await this.get(`get-master-list`);
    return new Promise(resolve => {
      resolve(data);
    });
  }

  async updateTripStatusWithChecklist(payload: any) {
    const { data } = await this.post(`update-tripstatus-with-checklist`, payload);
    return data;
  }

  async updateServiceStatus(payload: any) {
    const { data } = await this.post(`update-service-status`, payload);
    return new Promise(resolve => {
      resolve(data);
    });
  }

  async updateServiceItems(payload: any) {
    const { data } = await this.post(`addupdate-service-item`, payload);
    return new Promise(resolve => {
      resolve(data);
    });
  }

  async addUpdateServiceMaterial(payload: any) {
    const { data } = await this.post(`addupdate-service-material`, payload);
    return new Promise(resolve => {
      resolve(data);
    });
  }

  async updateServiceCSCCheckList(payload: any) {
    const { data } = await this.post(`addupdate-service-csc-list`, payload);
    return new Promise(resolve => {
      resolve(data);
    });
  }

  async addUpdateServiceMiscInfo(payload: any) {
    const { data } = await this.post(`addupdate-service-Misc-Info`, payload);
    return new Promise(resolve => {
      resolve(data);
    });
  }

  async addUpdateServiceCDSignature(payload: any) {
    const { data } = await this.post(`addupdate-service-cdsignature`, payload);
    return new Promise(resolve => {
      resolve(data);
    });
  }

}

const instance = new TransportAPI();
export default instance;

