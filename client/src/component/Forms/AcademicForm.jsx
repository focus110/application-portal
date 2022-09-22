import React, { useState } from "react";
import NavigationBtn from "../Buttons/NavigationBtn";

const AcademicForm = ({ current, setCurrent, user, setUser }) => {
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSelectGender = (e) => setUser({ ...user, gender: e.target.value });
  const onSelectState = (e) => setUser({ ...user, state: e.target.value });
  const onSelectLga = (e) => setUser({ ...user, lga: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (user === "" || user === null) {
      console.log("Enter all fields");
    } else {
      setCurrent(current + 1);
      console.log("submitted");
      // update(user);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <div className="flex w-full space-x-4 items-center">
          <div className="w-full">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              O level
            </label>
            <input
              name="olevel"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="O level"
              onChange={onChange}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              Number of sitting
            </label>
            <input
              name="sitting"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Number of Sitting"
              onChange={onChange}
            />
          </div>
        </div>

        {/* <div className="flex w-full space-x-4 items-center">
          <div className="w-full">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="email"
              onChange={onChange}
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              Sex
            </label>
            <div className="w-full relative">
              <select
                className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
                aria-label="Default select example"
                onChange={onSelectGender}
                required
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
        </div>
        <div className="flex w-full space-x-4 items-center">
          <div className="w-full">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              Nationality
            </label>
            <input
              name="nationality"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Nationality"
              onChange={onChange}
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              State
            </label>
            <div className="w-full relative">
              <select
                className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
                aria-label="Default select example"
                onChange={onSelectState}
                required
              >
                <option value="FCT">FCT</option>
                <option value="other">other</option>
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
          <div className="w-full">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              State
            </label>
            <div className="w-full relative">
              <select
                className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
                aria-label="Default select example"
                onChange={onSelectLga}
                required
              >
                <option value="FCT">FCT</option>
                <option value="other">other</option>
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
        <NavigationBtn current={current} setCurrent={setCurrent} />
      </form>
    </div>
  );
};

export default AcademicForm;
