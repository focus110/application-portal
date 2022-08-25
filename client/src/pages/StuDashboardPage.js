import React, { useContext, useEffect } from "react";
import "../App.css";
import Sidebar from "../component/Sidebar/Sidebar";
import Dashboard from "../component/Main/Dashboard";
import Rightside from "../component/Rightside/Rightside";
import AuthContext from "../context/auth/authContext";

const StuDashboardPage = () => {
  return (
    <div className="h-screen flex justify-center items-center font-body tracking-tighten">
      <div className="grid h-19/20 w-49/50 overflow-hidden grid-cols-x">
        <Sidebar index={0} />
        <Dashboard />
        <Rightside />
      </div>
    </div>
  );
};

export default StuDashboardPage;
