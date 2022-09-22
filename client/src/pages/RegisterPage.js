import React, { useContext, useEffect, useState } from "react";
import background from "../img/frame1.png";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import Alert from "../component/Main/Alert";

const RegisterPage = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  const goTo = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      goTo("/dashboard");
    }

    if (error === "User with the given username already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const {
    firstname,
    lastname,
    username,
    gender,
    email,
    phone,
    password,
    password2,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSelect = (e) => setUser({ ...user, program: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      gender === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      password2 === ""
    ) {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      console.log(user);
      register({
        firstname: firstname.toLowerCase(),
        lastname: lastname.toLowerCase(),
        username: username.toLowerCase(),
        gender: gender,
        email: email.toLocaleLowerCase(),
        phone: phone,
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
          <div className="space-y-2">
            <Link to="/register">
              <img src={logo} className="w-40" alt="rectem logo" />
            </Link>
            <h1 className="text-2xl text-rectem-black font-bold mt-16 mb-24">
              Register
            </h1>
            <p className="font-medium text-sm text-rectem-grey">
              Start your admission process
            </p>
          </div>

          <Alert />

          <form onSubmit={onSubmit} className="space-y-6 py-6">
            {/* <div className="flex w-full space-x-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Firstname
                </label>
                <input
                  name="firstname"
                  type="text"
                  className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder="firstname"
                  onChange={onChange}
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Lastname
                </label>
                <input
                  name="lastname"
                  type="text"
                  className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder="lastname"
                  onChange={onChange}
                />
              </div>
            </div> */}

            {/* <div className="flex w-full space-x-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder="username"
                  onChange={onChange}
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Sex
                </label>
                <div className="w-full relative">
                  <select
                    className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-3xl transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
                    aria-label="Default select example"
                    onChange={onSelect}
                  >
                    <option value="male">choose your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div className="absolute top-4 right-4 w-6 text-rectem-grey">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="flex w-full space-x-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder="email"
                  onChange={onChange}
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Program
                </label>
                <div className="w-full">
                  <select
                    className="block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white border rounded-3xl transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
                    onChange={onSelect}
                  >
                    <option value="">Select Application Type</option>
                    <option value="ond">OND</option>
                    <option value="hnd">HND</option>
                  </select>
                </div>
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

            <div className="flex flex-col items-start">
              <label className="block text-sm font-medium text-rectem-100 mb-2">
                Confirm Password
              </label>
              <input
                name="password2"
                type="password"
                className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                placeholder="confirm password"
                onChange={onChange}
              />
            </div>

            <div className="flex items-center text-sm font-medium text-rectem-100 cursor-pointer relative">
              <input
                className="mr-2 text-rectem-50 text-2xl appearance-none rounded border border-rectem-50 h-5 w-5"
                type="checkbox"
                name="remember"
                id="remember"
                onChange={onChange}
              />
              <div className="absolute text-rectem-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                I agree to the{" "}
                <span className="text-rectem-50">Terms & Conditions</span>
              </div>
            </div>

            <div className="w-full">
              <button className="w-full mb-4 px-6 py-3 block text-center bg-rectem-50 text-white rounded-3xl text-sm transition">
                <span className="font-semibold text-white text-lg">
                  Sign up
                </span>
              </button>
              <Link
                to="/"
                className="text-sm tracking-wide font-medium text-rectem-100"
              >
                Already have an account?{" "}
                <span className="text-rectem-50 no-underline hover:underline">
                  Sign in
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

export default RegisterPage;
