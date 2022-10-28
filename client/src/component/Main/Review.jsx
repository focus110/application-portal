import React from "react";
import { Nationality } from "../Data/Data";

const Review = () => {
  return (
    <form className="flex flex-col space-y-5 sm:space-y-4">
      <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
        <div className="w-full mb-4 sm:mb-0">
          <label className="block text-sm font-medium text-rectem-100 mb-2">
            Firstname
          </label>
          <input
            name="firstname"
            type="text"
            value={"firstname"}
            className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
            placeholder="firstname"
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-rectem-100 mb-2">
            Lastname
          </label>
          <input
            name="lastname"
            type="text"
            value={"lastname"}
            className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
            placeholder="lastname"
            required
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
        <div className="w-full  mb-4 sm:mb-0">
          <label className="block text-sm font-medium text-rectem-100 mb-2">
            Middle name
          </label>
          <input
            name="middlename"
            type="text"
            value={"middlename"}
            className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
            placeholder="Middle name"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-rectem-100 mb-2"
          >
            Mobile number
          </label>
          <input
            name="phone"
            type="phone"
            value={"phone"}
            className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
            placeholder="(+234)"
            required
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
        <div className="w-full  mb-4 sm:mb-0">
          <label className="block text-sm font-medium text-rectem-100 mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={"email"}
            className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
            placeholder="email"
            required
          />
        </div>
        <div className="w-full ">
          <label className="block text-sm font-medium text-rectem-100 mb-2">
            Gender
          </label>
          <div className="w-full relative">
            <select
              className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
              aria-label="Default select example"
              required
              value={"gender"}
            >
              <option selected value="" disabled>
                choose your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="absolute top-4 right-4 w-6 text-rectem-grey">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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

      <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
        <div className="w-full mb-4 sm:mb-0">
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-rectem-100 mb-2"
          >
            Date of birth
          </label>
          <input
            name="dob"
            type="date"
            value={"dob"}
            className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
            placeholder="Date of birth"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="religion"
            className="block text-sm font-medium text-rectem-100 mb-2"
          >
            Religion
          </label>
          <input
            name="religion"
            type="text"
            value={"religion"}
            className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
            placeholder="religion"
            required
          />
        </div>
      </div>

      <div className="flex w-full space-x-4 items-center">
        <div className="w-full">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-rectem-100 mb-2"
          >
            Address*
          </label>
          <textarea
            name="address"
            type="text"
            className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
            placeholder="Address"
            value={"address"}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
        <div className="sm:hidden w-full relative  sm:mb-0">
          <label className="block text-sm font-medium text-rectem-100 mb-2">
            Nationality
          </label>
          <div className="w-full relative">
            <select
              value={"nationality"}
              className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
              aria-label="Default select example"
              required
            >
              <option value="" defaultValue disabled hidden>
                Select an Option
              </option>
              {Nationality.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <div className="absolute top-4 right-4 w-6 text-rectem-grey">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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

      <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
        <div className="hidden sm:block w-full relative  mb-4 sm:mb-0">
          <label className="block text-sm font-medium text-rectem-100 mb-2">
            Nationality
          </label>
          <div className="w-full relative">
            <select
              value={"nationality"}
              className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
              aria-label="Default select example"
              required
            >
              <option value="" selected disabled>
                Select an Option
              </option>
              {Nationality.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <div className="absolute top-4 right-4 w-6 text-rectem-grey">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full mb-4 sm:mb-0">
          <label className="block text-sm font-medium text-rectem-100 mb-2">
            State
          </label>
          <div className="w-full relative">
            <select
              value={"state"}
              className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
              aria-label="Default select example"
              required
            >
              <option value="" selected disabled>
                Select an Option
              </option>
              {/* {States.map((state, i) => {
                return (
                  <option key={i} value={state.state}>
                    {state.state}
                  </option>
                );
              })} */}
            </select>
            <div className="absolute top-4 right-4 w-6 text-rectem-grey">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
            Local Government
          </label>
          <div className="w-full relative">
            <select
              value={"lga"}
              className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
              aria-label="Default select example"
              required
            >
              <option value="" selected>
                Select an Option
              </option>
            </select>
            <div className="absolute top-4 right-4 w-6 text-rectem-grey">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
    </form>
  );
};

export default Review;
