import React from "react";
import { Link } from "react-router-dom";
import Button from "../component/Buttons/Button";
import logo from "../img/logo.png";

const Page404 = () => {
  return (
    <div className="mx-2 md:mx-14 items-center">
      <div className="flex flex-row justify-between h-max md:h-[100px] md:items-center border-b p-4">
        <Link to="/">
          <img src={logo} className="w-40" alt="tailus logo" />
        </Link>
        {true ? (
          <span className="hidden md:flex space-x-4">
            <Button name="Sign up" path="/register" buttonType={"theme"} />
            <Button name="Sign in" path="/" buttonType={"theme"} />
          </span>
        ) : null}
      </div>

      <div className="flex flex-col items-center space-y-8 mt-[20vh]">
        <h1 className="text-center text-2xl text-rectem-black font-bold mt-12 mb-2">
          Page not found
        </h1>
        <div className="flex space-x-4">
          <Button name="Sign up" path="/register" buttonType={"theme"} />
          <Button name="Sign in" path="/" buttonType={"theme"} />
        </div>
      </div>
    </div>
  );
};

export default Page404;
