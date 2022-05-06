import React from "react";
import background from "../img/frame1.png";

const RegisterPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center lg:justify-start items-center">
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="bg-rectem-50 w-6/12 h-screen hidden lg:block"
      >
        <div className="text-3xl text-white p-24 absolute left-0 bottom-0">
          Redeemers College of Science and <br /> Technology
        </div>
      </div>
      <div className="w-full lg:w-5/12 flex-1 max-w-xs lg:ml-28">
        <div>
          <div className="bg-white rounded w-full mb-6">
            <h1 className="text-lg text-gray-900 font-bold mt-16 mb-24">
              Register
            </h1>

            <form>
              <form className="mb-4">
                <label className="block text-sm text-gray-900 mb-2">
                  Firstname*
                </label>
                <input
                  id="email"
                  type="email"
                  className="block w-full rounded-3xl border bg-white py-2 px-3 text-sm"
                  name="email"
                  placeholder="firstname"
                  required
                  autofocus
                />
              </form>

              <form className="mb-4">
                <label className="block text-sm text-gray-900 mb-2">
                  Lastname*
                </label>
                <input
                  id="email"
                  type="email"
                  className="block w-full rounded-3xl border bg-white py-2 px-3 text-sm"
                  name="email"
                  placeholder="lastname"
                  required
                  autofocus
                />
              </form>

              <form className="mb-4">
                <label className="block text-sm text-gray-900 mb-2">
                  Username*
                </label>
                <input
                  id="email"
                  type="email"
                  className="block w-full rounded-3xl border bg-white py-2 px-3 text-sm"
                  name="email"
                  placeholder="username"
                  required
                  autofocus
                />
              </form>

              <form className="mb-4">
                <div className="w-full flex justify-between items-center">
                  <label
                    for="password"
                    className="block text-sm text-gray-900 mb-2"
                  >
                    email*
                  </label>
                </div>
                <input
                  id="password"
                  type="password"
                  className="block w-full rounded-3xl border bg-white py-2 px-3 text-sm"
                  name="password"
                  placeholder="email"
                  required
                />
              </form>

              <div className="flex justify-between pt-1 pb-5 text-sm text-gray-darker font-thin">
                <label>
                  <input
                    className="mr-1"
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />{" "}
                  Remember me
                </label>
                <a
                  className="text-xs font-thin text-blue no-underline hover:underline"
                  href="#"
                >
                  Forgotten password?
                </a>
              </div>

              <a
                href="/"
                className="block w-full text-center bg-rectem-50 text-white rounded-3xl py-3 text-sm tracking-wide"
              >
                Sign in
              </a>
            </form>
          </div>

          <p className="text-center lg:text-left text-sm text-gray-600 font-thin mb-32">
            Already have an account yet?{" "}
            <a href="/" class="text-rectem-50 no-underline hover:underline">
              Sign in
            </a>
          </p>

          <p className="text-center lg:text-left text-sm text-gray-600 font-thin">
            2022 All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
