import config from "../config/config";
import AxiosService from "./AxiosService";

export default class EmployeeService {
  baseUrl = config.baseUrl;
  addEmployee(data) {
    return AxiosService.postService(
      `${this.baseUrl}employeepayrollservice/create`,
      data
    );
  }

  getAllEmployee() {
    console.log(
      AxiosService.getService(`${this.baseUrl}employeepayrollservice`)
    );
    return AxiosService.getService(`${this.baseUrl}employeepayrollservice`);
  }

  getEmployee(id) {
    return AxiosService.getService(
      `${this.baseUrl}employeepayrollservice/get/${id}`
    );
  }

  updateEmployee(data) {
    return AxiosService.putService(
      `${this.baseUrl}employeepayrollservice/update/${data.employeeId}`,
      data
    );
  }

  deleteEmployee(id) {
    return AxiosService.deleteService(
      `${this.baseUrl}employeepayrollservice/delete/${id}`
    );
  }
}
