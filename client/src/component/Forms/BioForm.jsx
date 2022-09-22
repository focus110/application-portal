import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import { Nationality, States } from "../Data/Data";

import NavigationBtn from "../Buttons/NavigationBtn";

const BioForm = ({ current, setCurrent, user, setUser }) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { update, error, clearErrors } = authContext;

  useEffect(() => {
    if (error === "User with the given username already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error]);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSelectGender = (e) => setUser({ ...user, gender: e.target.value });
  const onSelectState = (e) => {
    setUser({ lga: e.target.value });
    setUser({ ...user, state: e.target.value });
  };
  const onSelectLga = (e) => setUser({ ...user, lga: e.target.value });
  const onSelectNal = (e) => setUser({ ...user, nationality: e.target.value });

  // useEffect(() => {

  //   }

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  const {
    Middlename,
    Mobilenumber,
    email,
    firstname,
    gender,
    lastname,
    lga,
    middlename,
    mobilenumber,
    nationality,
    state,
  } = user;
  console.log(user);

  const onSubmit_ = (e) => {
    e.preventDefault();

    if (
      Middlename === "" ||
      Mobilenumber === "" ||
      email === "" ||
      firstname === "" ||
      gender === "" ||
      lastname === "" ||
      lga === "" ||
      middlename === "" ||
      mobilenumber === "" ||
      nationality === "" ||
      state === ""
    ) {
      setAlert("Enter all fields", "danger");
    } else {
      setCurrent(current + 1);
      // setAlert("", "success"); const formData = new FormData();

      // update(user);
    }
  };

  // console.log(user);

  return (
    <div>
      <form
        onSubmit={onSubmit_}
        className="flex flex-col space-y-5 sm:space-y-4"
      >
        <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
          <div className="w-full mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              Firstname
            </label>
            <input
              name="firstname"
              type="text"
              value={firstname}
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="firstname"
              onChange={onChange}
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
              value={lastname}
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="lastname"
              onChange={onChange}
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
              value={middlename}
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Middle name"
              onChange={onChange}
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              Mobile number
            </label>
            <input
              name="mobilenumber"
              type="phone"
              value={mobilenumber}
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Mobile number"
              onChange={onChange}
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
              value={email}
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="email"
              onChange={onChange}
              required
            />
          </div>
          <div className="w-full ">
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
                <option defaultValue value="male">
                  choose your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div className="absolute top-4 right-4 w-6 text-rectem-grey">
                <svg
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

        <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
          <div className="sm:hidden w-full relative  sm:mb-0">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              Nationality
            </label>
            <div className="w-full relative">
              <select
                value={nationality}
                className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
                aria-label="Default select example"
                onChange={onSelectNal}
                required
              >
                <option value="none" defaultValue disabled hidden>
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
                <svg
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

        <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
          <div className="hidden sm:block w-full relative  mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              Nationality
            </label>
            <div className="w-full relative">
              <select
                value={nationality}
                className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
                aria-label="Default select example"
                onChange={onSelectNal}
                required
              >
                <option value="none" defaultValue disabled hidden>
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
                <svg
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

          <div className="w-full mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              State
            </label>
            <div className="w-full relative">
              <select
                value={state}
                className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
                aria-label="Default select example"
                onChange={onSelectState}
                required
              >
                <option value="none" defaultValue disabled hidden>
                  Select an Option
                </option>
                {States.map((state, i) => {
                  return (
                    <option key={i} value={state.state}>
                      {state.state}
                    </option>
                  );
                })}
              </select>
              <div className="absolute top-4 right-4 w-6 text-rectem-grey">
                <svg
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
              Local Government
            </label>
            <div className="w-full relative">
              <select
                value={lga}
                className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
                aria-label="Default select example"
                onChange={onSelectLga}
                required
              >
                <option value="none" selected disabled>
                  Select an Option
                </option>

                {States.map(function (state, i) {
                  return state.lgas.map((item, i) => {
                    return user.state === state.state ? (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ) : null;
                  });
                })}
              </select>
              <div className="absolute top-4 right-4 w-6 text-rectem-grey">
                <svg
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

        <div className="pt-4">
          <NavigationBtn current={current} setCurrent={setCurrent} />
        </div>
      </form>
    </div>
  );
};

export default BioForm;
