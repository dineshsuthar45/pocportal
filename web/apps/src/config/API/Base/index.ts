import Config from './Configure';
export default class BaseAPI {
  _baseRoute: string;

  _client: any;

  constructor(baseRoute: string) {
    this._baseRoute = baseRoute;
    this._client = Config.APIinstance;
  }

  post(route: string, postData?: {}, headers = {}) {
    return this._client.post(`${this._baseRoute}/${route}`, postData, {
      headers
    });
  }

  put(route: string, putData: {}, headers = {}) {
    return this._client.put(`${this._baseRoute}/${route}`, putData, {
      headers
    });
  }

  get(route: string, params = {}, headers = {}) {
    return this._client.get(`${this._baseRoute}/${route}`, { params, headers });
  }
}
