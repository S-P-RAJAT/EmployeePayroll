const axios = require("axios").default;
export default class AxiosService {
  postService(
    url = "",
    payload = null,
    tokenRequired = false,
    httpOptions = null
  ) {
    return axios.post(url, payload, tokenRequired && httpOptions);
  }
  putService(
    url = "",
    payload = null,
    tokenRequired = false,
    httpOptions = null
  ) {
    return axios.put(url, payload, tokenRequired && httpOptions);
  }

  deleteService(url = "", tokenRequired = false, httpOptions = null) {
    return axios.delete(url, tokenRequired && httpOptions);
  }

  getService(url = "", tokenRequired = false, httpOptions = null) {
    return axios.get(url, tokenRequired && httpOptions);
  }
}
