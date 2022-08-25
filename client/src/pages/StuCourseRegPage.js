import React, { useContext, useEffect } from "react";
import "../App.css";
import Sidebar from "../component/Sidebar/Sidebar";
import CourseReg from "../component/Main/CourseReg";
import Rightside from "../component/Rightside/Rightside";
import AuthContext from "../context/auth/authContext";

const StuCourseRegPage = () => {
  // const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   authContext.loadUser();
  //   // eslint-disable-next-line
  // }, [authContext]);
  return (
    <div className="h-screen flex justify-center items-center font-body tracking-tighten">
      <div className="grid h-19/20 w-49/50 overflow-hidden grid-cols-x">
        <Sidebar index={2} />
        <CourseReg />
        <Rightside />
      </div>
    </div>
  );
};

export default StuCourseRegPage;
