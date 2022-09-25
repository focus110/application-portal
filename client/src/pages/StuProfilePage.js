import React from "react";
import "../App.css";
import Sidebar from "../component/Sidebar/Sidebar";
import Profile from "../component/Main/Profile";
import Rightside from "../component/Rightside/Rightside";

const StuProfilePage = () => {
  return (
    <div className="flex justify-center items-center font-body tracking-tighten">
      {/* h-19/20 w-49/50 */}
      <div className="wrapper grid md:grid-cols-md lg:grid-cols-x 2xl:grid-cols-xx overflow-hidden">
        <Sidebar index={1} />
        <Profile />
        <Rightside />
      </div>
    </div>
  );
};

export default StuProfilePage;
