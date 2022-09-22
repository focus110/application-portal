import React, { useRef, useState } from "react";
import Logo from "../../img/logo.png";
import { MenuIcon } from "@heroicons/react/solid";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "../Data/Data";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen);
  };

  const modalRef = useRef();

  const onClk = (e) => {
    if (modalRef.current === e.target) setIsOpen(false);
  };
  return (
    <div className="block fixed z-10 sm:hidden  w-full bg-rectem-50 h-[75px] text-white ">
      <div
        ref={modalRef}
        onClick={onClk}
        className={`${
          isOpen ? null : `hidden`
        } transition-opacity duration-500  absolute z-10 bg-black opacity-60 h-full w-full ease-in`}
      ></div>

      <ul
        className={`${
          isOpen ? null : `hidden`
        } rounded-r-md h-max bg-rectem-50 absolute z-20 top-0 pl-4 p-4 py-8 text-sm w-[70%] bg-acend-theme-dark flex flex-col sm:hidden justify-between space-y-8`}
      >
        <li className="p-4 ">
          <div className="flex justify-between items-center">
            <Link className="cursor-pointer space-y-3" to="/">
              <img className="w-28" src={Logo} alt="acendlogo" />
            </Link>
            <svg
              onClick={openMenu}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="cursor-pointer w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </li>
        {SidebarData.map((item, i) => {
          return (
            <li onClick={openMenu} key={i} className="pb-2 pl-4 ">
              <NavLink to={`/${item.link}`}>{item.heading}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between items-center h-full px-9">
        <Link to="/">
          <img src={Logo} className="w-28" alt="School logo and name" />
        </Link>

        <div>
          <MenuIcon onClick={openMenu} className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
