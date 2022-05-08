import React from "react";
import background from "../../img/frame1.png";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

const RegisterPage = () => {
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

          <form action="" className="space-y-6 py-6">
            <div className="flex w-full space-x-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Firstname
                </label>
                <input
                  type="text"
                  className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder="email"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Lastname
                </label>
                <input
                  type="text"
                  className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder="lastname"
                />
              </div>
            </div>

            <div className="flex w-full space-x-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder="username"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Sex
                </label>
                <div className="w-full relative">
                  <select
                    class="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-3xl transition ease-in-out
      m-0
      focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option value="male">choose your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div className="absolute top-4 right-4 w-6 text-rectem-grey">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full space-x-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder="email"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-rectem-100 mb-2">
                  Phone
                </label>
                <input
                  type="number"
                  className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="phone"
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <label className="block text-sm font-medium text-rectem-100 mb-2">
                Password
              </label>
              <input
                type="password"
                className="block w-full rounded-3xl border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                placeholder="password"
              />
            </div>

            <div className="flex items-center text-sm font-medium text-rectem-100 cursor-pointer relative">
              <input
                className="mr-2 text-rectem-50 text-2xl appearance-none rounded border border-rectem-50 h-5 w-5"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <div className="absolute text-rectem-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                I agree to the{" "}
                <span className="text-rectem-50">Tearms & Conditions</span>
              </div>
            </div>

            <div className="w-full">
              <button className="w-full px-6 py-3 block text-center bg-rectem-50 text-white rounded-3xl text-sm transition">
                <span className="font-semibold text-white text-lg">
                  Sign up
                </span>
              </button>
              <Link
                to="/"
                className="text-sm tracking-wide font-medium text-rectem-100"
              >
                Already have an account?{" "}
                <span class="text-rectem-50 no-underline hover:underline">
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
