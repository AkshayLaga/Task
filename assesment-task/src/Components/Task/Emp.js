import React from "react";
import User from "./User";
import { Route, Routes } from "react-router-dom";
import DisplayUser from "./DisplayUser";
const Emp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/submit-data" element={<DisplayUser />} />
      </Routes>
    </>
  );
};

export default Emp;