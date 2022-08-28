import React from "react";
import "../App.css";
import Sidebar from "../component/Sidebar/Sidebar";
import Settings from "../component/Main/Settings";
import Rightside from "../component/Rightside/Rightside";

const StuSettingsPage = () => {
  return (
    <div className="h-screen flex justify-center items-center font-body tracking-tighten">
      <div className="grid md:grid-cols-md lg:grid-cols-x 2xl:grid-cols-xx h-19/20 w-49/50 md:overflow-hidden">
        <Sidebar index={3} />
        <Settings />
        <Rightside />
      </div>
    </div>
  );
};

export default StuSettingsPage;
