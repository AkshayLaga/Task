import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./TableSlice";
import { useNavigate } from "react-router-dom";
import "./User.css"
const User = () => {
  const [row, setRow] = useState([{ eName: "", desig: "", salary: 0 }]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    const rowsInput = {
      eName: "",
      desig: "",
      salary: 0,
    };
    setRow([...row, rowsInput]);
  };
  const handleRemove = (i) => {
    const rows = [...row];
    console.log(rows);
    rows.splice(i, 1);
    dispatch(removeUser(i));
    setRow(rows);
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const rowsInput = [...row];
    rowsInput[i][name] = value;
    setRow(rowsInput);
  };
  const handleSubmit = () => {
    dispatch(addUser(row));
    navigate("/submit-data", { replace: true });
  };
  return (
    <>
      <button onClick={handleClick} className="btn btn-outline-primary m-2">
        Add Row
      </button>
      <table className="table-bordered table-responsive table-hover table-primary m-2 w-75 ">
        <thead style={{backgroundColor:"rgb(221, 221, 221)"}}>
          <tr>
            <th>Action</th>
            <th>Emplyoee Name</th>
            <th>Designation</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(row) &&
            row.map((val, i) => {
              return (
                <tr key={val + i}>
                  <td>
                    <button
                      onClick={() => handleRemove(i)}
                      className="btn btn-outline-danger"
                    >
                      Remove
                    </button>
                  </td>
                  <td>
                    <input
                      name="eName"
                      //   value={val.eName}
                      onChange={(e) => handleChange(e, i)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      name="desig"
                      //   value={val.desig}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td>
                    <input
                      name="salary"
                      className="form-control"
                      //   value={val.salary}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button onClick={handleSubmit} className="btn btn-warning m-2">
        Submit
      </button>
    </>
  );
};

export default User;