import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "./TableSlice";
import "./User.css"
const DisplayUser = () => {

    const navigate = useNavigate()
  const user = useSelector(selectUser);
  const [total,setTotal] = useState()
  const countTotal = () =>{
    var total = 0
    user.map((item)=>(total += parseInt(item.salary)))
    setTotal(total)
  }
  useEffect(()=>{
    countTotal()
  },[])
//   console.log(user);
const Back = () =>{
    navigate("/")
}

  return (
    <>
      <h3 className="text-center m-3">Emplyoee salary List</h3>
            <button  className="btn btn-outline-primary m-2" onClick={Back}>Back</button>
      <table className="table-bordered table-responsive table-hover table-striped m-2 table-primary w-75">
        <thead style={{backgroundColor:"rgb(221, 221, 221)"}}>
          <tr>
            <th>Emplyoee Name</th>
            <th>Designation</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(user) &&
            user.map((val, i) => {
              return (<>
                  
                <tr key={val + i}>
                  <td>{val.eName}</td>
                  <td>{val.desig}</td>
                  <td>{val.salary }</td> 
                </tr>
                
                </>  );
            })}
        </tbody>
           <tfoot>
              <tr>
              <td>Total:</td>
              <td></td>
              <td>&#8377;{total}
              </td>
               </tr>
           </tfoot>
        
      </table>
    </>
  );
};

export default DisplayUser;