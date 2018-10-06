import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/';

export default class HTTPMethods {
  constructor(params) {
    this.url = BASE_URL + params;
  }
  getAjax() {
    return axios.get(this.url).then(res => res).catch((err) => {
      console.log(err);
    });
  }

  postAjax(args) {
    return axios.post(this.url, args).then(res => res).catch((err) => {
      console.log(err);
    });
  }
}
