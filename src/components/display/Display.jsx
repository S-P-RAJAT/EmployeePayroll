import React from "react";
import "./Display.scss";
import deleteIcon from "../../assets/icons/delete-black-18dp.svg";
import editIcon from "../../assets/icons/create-black-18dp.svg";
import { withRouter } from "react-router-dom";

const Display = (props) => {
  const update = (employeeId) => {
    props.history.push(`payroll-form/${employeeId}`);
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
                  src={profileImages("./" + element.profileUrl).default}
                  alt="No images"
                />
              </td>
              <td>{element.name}</td>
              <td className="gender">{element.gender}</td>
              <td>
                {element.department &&
                  element.department.map((dept) => (
                    <div className="dept-label">{dept}</div>
                  ))}
              </td>
              <td> ₹ {element.salary}</td>
              <td>{element.startDate}</td>
              <td>
                <img src={deleteIcon} alt="delete" />
                <img onClick={() => update(element.id)} src={editIcon} alt="edit" />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default withRouter(Display);
