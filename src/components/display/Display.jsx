import React from "react";
import "./Display.scss";
import deleteIcon from "../../assets/icons/delete-black-18dp.svg";
import editIcon from "../../assets/icons/create-black-18dp.svg";
import { withRouter } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";

const Display = (props) => {
  const update = (employeeId) => {
    props.history.push(`payroll-form/${employeeId}`);
  };

  const remove = (employeeId) => {
    const employeeService = new EmployeeService();
    employeeService
      .deleteEmployee(employeeId)
      .then((data) => {
        window.confirm("Data once deleted cannot be restored!! Do you wish to continue ?");
        alert("Data deleted successfully!!");
        window.location.reload();
        console.log("data after delete", data);
        props.getAllEmployee();
      })
      .catch((err) => {
        alert("error while deleting the data!");
        console.log("error after delete", err);
      });
  };

  const profileImages = require.context("../../assets/profile-images/", true);
  return (
    <table id="display" className="display">
      <tbody>
        <tr key={-1}>
          <th>Profile Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Start Date</th>
          <th>Actions</th>
        </tr>
        {props.employeeArray &&
          props.employeeArray.map((element, ind) => (
            <tr key={ind}>
              <td>
                <img
                  className="profile"
                  src={profileImages("./" + element.profilePic).default}
                  alt="No images"
                />
              </td>
              <td>{element.name}</td>
              <td className="gender">{element.gender}</td>
              <td>
                {element.departments &&
                  element.departments.map((dept) => (
                    <div className="dept-label">{dept}</div>
                  ))}
              </td>
              <td> ₹ {element.salary}</td>
              <td>
                {(new Date(element.startDate)).toLocaleDateString('en-GB', {
                  day: 'numeric', month: 'short', year: 'numeric'
                })}
              </td>
              <td>
                <img onClick={() => remove(element.employeeId)} src={deleteIcon} alt="delete" />
                <img onClick={() => update(element.employeeId)} src={editIcon} alt="edit" />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default withRouter(Display);
