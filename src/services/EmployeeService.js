import config from "../config/config";
import AxiosService from "./AxiosService";

export default class EmployeeService {
  baseUrl = config.baseUrl;
  addEmployee(data) {
    return AxiosService.postService(`${this.baseUrl}employee`, data);
  }

  getAllEmployee() {
    return AxiosService.getService(`${this.baseUrl}employee`);
  }

  getEmployee(id) {
    return AxiosService.getService(`${this.baseUrl}employee/${id}`);
  }

  updateEmployee(data) {
    return AxiosService.putService(`${this.baseUrl}employee/${data.id}`, data);
  }

  deleteEmployee(id) {
    return AxiosService.deleteService(`${this.baseUrl}employee/${id}`);
  }
}
