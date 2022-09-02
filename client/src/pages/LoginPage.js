import e from "cors";
import { check } from "express-validator";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../component/Main/Alert";
import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";
import background from "../img/frame2.jpg";
import logo from "../img/logo.png";

const LoginPage = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;
  const goTo = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      goTo("/dashboard");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please enter all fields", "red");
    } else {
      login({
        email: email.toLocaleLowerCase(),
        password: password,
      });
    }
  };

  return (
    <div className="2xl:container h-screen m-auto">
      <div hidden className="fixed inset-0 w-6/12 lg:block">
        <img className="w-full h-full object-cover" src={background} alt="" />
      </div>
      <div className="relative h-full ml-auto lg:w-6/12">
        <div className="mx-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <div className="">
            <Link to="/">
              <img src={logo} className="w-40" alt="tailus logo" />
            </Link>
            <h1 className="text-2xl text-rectem-black font-bold mt-12 mb-2">
              Login
            </h1>
            <p className="font-medium text-sm text-rectem-grey mb-6">
              login to your account
            </p>
          </div>
          <Alert />
          <form onSubmit={onSubmit} className="space-y-6 py-6">
            <div className="flex w-full space-x-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Username
                </label>
                <input
                  name="email"
                  type="text"
                  className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder="username or email"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <label className="block text-sm font-medium text-rectem-100 mb-2">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                placeholder="password"
                onChange={onChange}
              />
            </div>

            <div className="flex items-center text-sm font-medium text-rectem-100 cursor-pointer relative">
              <input
                className="mr-2 text-rectem-50 text-2xl appearance-none rounded border border-rectem-50 h-5 w-5"
                type="checkbox"
                name="remember"
                id="check-box-1"
                onChange={onChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute text-rectem-50 check-1 text-opacity-0 transition"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex relative w-full">
                <div className="">Remember me</div>
                <div className="text-rectem-50 absolute right-0">
                  Reset Password?
                </div>
              </div>
            </div>

            <div className="w-full">
              <button className="w-full px-6 py-3 block text-center bg-rectem-50 text-white rounded-3xl text-sm transition">
                <span className="font-semibold text-white text-lg">Login</span>
              </button>
              <Link
                to="/register"
                className="text-sm tracking-wide font-medium text-rectem-100"
              >
                Not registered yet? Create an Account{" "}
                <span className="text-rectem-50 no-underline hover:underline">
                  Sign up
                </span>
              </Link>
            </div>
          </form>

          {/* <div className="pt-12">
            <div className="space-y-2 text-left">
              <span className="block text-sm tracking-wide text-gray-500">
                2022 All right reserved
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
