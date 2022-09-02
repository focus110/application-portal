// Imports
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Rightside.css";
import { NotificationData } from "../Data/Data";

import Notification from "./Notification";

import { BellIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/outline";

import image from "../../img/frame1.png";
import frame from "../../img/frame3.png";
import AdmissionStatus from "./AdmissionStatus";
import AuthContext from "../../context/auth/authContext";

const Rightside = () => {
  // State for dropdown button
  const [arrowIsOpen, setArrowIsOpen] = useState(false);
  // State for Notification
  const [notIsOpen, setNotIsOpen] = useState(false);
  const [NotData, SetNotData] = useState(NotificationData);

  // eslint-disable-next-line
  const updateNotification = (newNotification) => {
    SetNotData(...NotData);
  };

  const authContext = useContext(AuthContext);
  const { logOut } = authContext;
  const goTo = useNavigate();

  const logoutUser = () => {
    logOut();
    goTo("/");
  };

  return (
    <div className="flex flex-col lg:sticky top-3 z-0 bg-white p-4 absolute right-0 bg-transparent">
      <div className="flex flex-row gap-6 md:gap-6 md:p-4 justify-center items-center content-center">
        <AdmissionStatus />
        {/* Notification Button */}
        <div className="inline-block relative">
          <button
            className="cursor-pointer"
            onClick={() => {
              setNotIsOpen(!notIsOpen);
            }}
          >
            <BellIcon className="text-black h-8 w-8" />
          </button>
          <div
            className={
              notIsOpen === true
                ? "block absolute bg-white h-fit py-6 w-70 right-1.5 top-15 rounded-xl border-solid border-gray-200 font-body justify-evenly"
                : "hidden"
            }
            onMouseLeave={() => {
              setNotIsOpen(false);
            }}
          >
            <div className="flex flex-col p-2 gap-2">
              {NotData.map((data, index) => {
                return <Notification data={data} key={index} />;
              })}
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-rectem-50 text-center rounded-3xl h-8 w-20">
                <span className="font-normal text-xs text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Profile picture */}
        {/* <Link to="/settings">
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img src={image} alt="profile pic" className=" rounded-full" />
          </div>
        </Link> */}

        {/* Arrow Dropdown */}
        <div className="relative inline-block">
          <button
            className="cursor-pointer"
            onClick={() => {
              setArrowIsOpen(!arrowIsOpen);
            }}
          >
            {/* Profile picture */}

            <div className="h-10 md:h-14 w-10 md:w-14">
              <img src={image} alt="profile pic" className=" rounded-full" />
            </div>

            {/* <ChevronDownIcon className="text-black h-3 w-3" /> */}
          </button>
          <div
            className={
              arrowIsOpen === true
                ? "flex flex-col absolute shadow-xl border-[1px] bg-white h-fit w-70 right-1.5 top-15 rounded-xl border-solid border-gray-200 font-body text-dp text-left font-normal justify-evenly"
                : "hidden"
            }
            onMouseLeave={() => {
              setArrowIsOpen(false);
            }}
          >
            <Link className="text-black py-3 pl-10" to="/settings">
              Profile
            </Link>
            <hr />
            <Link className="text-black py-3 pl-10" to="/dashboard">
              Application Guide
            </Link>
            <hr />
            <Link className="text-black py-3 pl-10" to="/dashboard">
              Need help?
            </Link>
            <hr />
            <div
              className="cursor-pointer text-black py-3 pl-10"
              onClick={() => logoutUser()}
            >
              Logout
            </div>
          </div>
        </div>
      </div>

      {/* School Rising champions Image */}
      <div className="md:p-6 hidden lg:block">
        {/* <div className=' pl-6 text-black font-body pt-10 font-medium text-3xl not-italic'>Rising Champions</div> */}
        <img src={frame} alt="" className="" />
      </div>
    </div>
  );
};

export default Rightside;
