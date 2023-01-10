import React from "react";
import { Outlet } from "react-router-dom";
import Filter from "../../Pages/Home/Filter/Filter";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Filter></Filter>
      <div className="px-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
