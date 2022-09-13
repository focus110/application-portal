import React, { useEffect, useState } from "react";
import { useContext } from "react";

import AuthContext from "../../context/auth/authContext";
import AvatarContext from "../../context/avatar/avatarContext";
import AlertContext from "../../context/alert/alertContext";

const Settings = ({ name, setName, showModal, setShowModal }) => {
  const authContext = useContext(AuthContext);
  const avatarContext = useContext(AvatarContext);
  const { avaUrl, setAvatar, getAvatar, error, clearErrors } = avatarContext;
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const { user } = authContext;

  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
      setFile("");
      setFilename("");
      clearErrors();
    }
  }, [error]);

  const openModal = (e) => {
    setShowModal((prev) => !prev);
    setName(e.target.innerText);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (file === "") {
      setAlert("Choose a file", "danger");
      setFile("");
      setFilename("");
    } else {
      formData.append("upload", file);
      setAvatar(formData);
      setFile("");
      setFilename("");
      setTimeout(() => {
        getAvatar();
      }, 1000);

      setAlert("Updated!", "success");
    }
  };

  return (
    <div className="relative p-10 font-medium flex flex-col gap-8 mt-8 lg:mt-2 bg-white">
      <span className="not-italic tracking-tighten text-2xl font-display text-rectem-75 text-center md:text-left">
        Settings
      </span>

      {/* Body */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 md:justify-evenly">
        {/* <Modal showModal={showModal} setShowModal={setShowModal} name={name} /> */}
        {/* Profile Picture Part */}
        <div className="flex flex-col w-1/4 text-center items-center gap-3">
          <span className="not-italic font-bold tracking-tighten text-rectem-black text-2xl">
            Account
          </span>
          <img
            src={avaUrl}
            alt="Profile Pic"
            className="rounded-full h-20 md:h-28 lg:h-24 xl:h-40 w-20 md:w-28 lg:w-24 xl:w-40"
          />
          {/* <button>
            <span className="font-display tracking-tighten not-italic font-medium text-lg"> */}
          <form
            onSubmit={onSubmit}
            className="flex items-center flex-col space-y-4 text-sm"
          >
            <div className="w-max flex mt-2  items-center">
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept="image/*"
                onChange={onChange}
              />
              <label
                className="w-full cursor-pointer text-black p-2 text-[11px] font-normal"
                htmlFor="file"
              >
                {`${filename?.split(" ")[0]}...${
                  filename.split(" ")[filename.split(" ").length - 1]
                }`}
              </label>
              {/* <h1 className="w-7/12 px-2 overflow-x-scroll scroll">
                {filename}
              </h1> */}
            </div>

            <button
              className="w-max rounded-md cursor-pointer text-white bg-rectem-50 p-2 px-3 text-xs font-normal"
              htmlFor="file"
            >
              Save
            </button>
          </form>
          {/* </span>
          </button> */}
        </div>

        {/* Account Settings Part */}
        <div className="flex flex-col text-left gap-8 lg:gap-12">
          {/* Personal Details */}
          <div className="flex flex-row gap-20 ">
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-between w-full gap-8">
              {/* Username */}
              <div className="flex flex-col justify-evenly gap-2">
                <span className="text-rectem-black font-medium not-italic text-base">
                  Username
                </span>
                <span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
                  {user?.username}
                </span>
                <button id="username" className="text-left" onClick={openModal}>
                  <span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
                    Change Username
                  </span>
                </button>
              </div>

              {/* First Name */}
              <div className="flex flex-col justify-evenly gap-2">
                <span className="text-rectem-black font-medium not-italic text-base">
                  First name
                </span>
                <span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
                  {user?.firstname}
                </span>
                <button className="text-left" onClick={openModal}>
                  <span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
                    Change Firstname
                  </span>
                </button>
              </div>

              {/* Last Name */}
              <div className="flex flex-col justify-evenly gap-2">
                <span className="text-rectem-black font-medium not-italic text-base">
                  Last name
                </span>
                <span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
                  {user?.lastname}
                </span>
                <button className="text-left" onClick={openModal}>
                  <span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
                    Change Lastname
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="flex flex-row gap-20">
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-between w-full gap-8">
              {/* Phone */}
              <div className="flex flex-col justify-evenly gap-2">
                <span className="text-rectem-black font-medium not-italic text-base">
                  Phone
                </span>
                <span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
                  {user?.phone ?? "loading..."}
                </span>
                <button className="text-left" onClick={openModal}>
                  <span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
                    Change Phone
                  </span>
                </button>
              </div>

              {/* Email */}
              <div className="flex flex-col justify-evenly gap-2">
                <span className="text-rectem-black font-medium not-italic text-base">
                  Email
                </span>
                <span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
                  {user?.email ?? "loading..."}
                </span>
                <button className="text-left" onClick={openModal}>
                  <span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
                    Change Email
                  </span>
                </button>
              </div>

              {/* Password */}
              <div className="flex flex-col justify-evenly gap-2">
                <span className="text-rectem-black font-medium not-italic text-base">
                  Password
                </span>
                <span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
                  {"******"}
                </span>
                <button className="text-left" onClick={openModal}>
                  <span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
                    Change Password
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
