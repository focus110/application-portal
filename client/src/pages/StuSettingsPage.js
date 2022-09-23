import React, { useState } from "react";
import "../App.css";
import Sidebar from "../component/Sidebar/Sidebar";
import Settings from "../component/Main/Settings";
import Rightside from "../component/Rightside/Rightside";
import { Modal } from "../component/Modal/Modal";
import Alert from "../component/Main/Alert";

const StuSettingsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="flex justify-center items-center font-body tracking-tighten">
      <div
        className={`${
          showModal ? null : `hidden`
        } absolute bg-black bg-opacity-40 h-full w-full z-10`}
      ></div>

      <Modal
        id={""}
        showModal={showModal}
        setShowModal={setShowModal}
        name={name}
      />

      <div className="wrapper grid md:grid-cols-md lg:grid-cols-x 2xl:grid-cols-xx md:overflow-hidden">
        <Alert />
        <Sidebar index={3} />
        <Settings
          showModal={showModal}
          setShowModal={setShowModal}
          name={name}
          setName={setName}
        />
        <Rightside />
      </div>
    </div>
  );
};

export default StuSettingsPage;
