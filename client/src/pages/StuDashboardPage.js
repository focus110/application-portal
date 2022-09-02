import React, { useContext, useEffect } from "react";
import "../App.css";
import Sidebar from "../component/Sidebar/Sidebar";
import Dashboard from "../component/Main/Dashboard";
import Rightside from "../component/Rightside/Rightside";
import AuthContext from "../context/auth/authContext";

const StuDashboardPage = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);
  return (
    <div className="h-screen flex justify-center items-center font-body tracking-tighten">
      <div className="grid md:grid-cols-md lg:grid-cols-x 2xl:grid-cols-xl h-19/20 w-49/50 md:overflow-hidden">
        <Sidebar index={0} />
        <Dashboard />
        <Rightside />
      </div>
    </div>
  );
};

export default StuDashboardPage;
