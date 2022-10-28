import React, { useEffect, useState } from "react";
import { useContext } from "react";
import GuardianContext from "../../context/guardian/guardianContext";
import NavigationBtn from "../Buttons/NavigationBtn";
import { formatPhone } from "./script";

const Guardian = ({ current, setCurrent }) => {
  const guardiancontext = useContext(GuardianContext);
  const {
    registerGuardianInfo,
    updateGuardianInfo,
    guardianInfo,
    loadGuardianInfo,
  } = guardiancontext;

  const [user, setUser] = useState({
    firstname: guardianInfo?.firstname,
    lastname: guardianInfo?.lastname,
    middlename: guardianInfo?.middlename,
    gender: guardianInfo?.gender,
    email: guardianInfo?.email,
    phone: guardianInfo?.phone,
    address: guardianInfo?.home_address,
  });

  useEffect(() => {
    loadGuardianInfo();
  }, []);

  const { firstname, lastname, middlename, gender, email, phone, address } =
    user;

  const onChange = (e) => {
    if (e.target.name === "phone") {
      const formattedPhone = formatPhone(e.target.value);
      setUser({ ...user, phone: formattedPhone });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (user === "" || user === null) {
      window.alert("Enter all fields");
    } else {
      setCurrent(current + 1);

      if (!guardianInfo) {
        registerGuardianInfo(user);
      } else {
        const payload = {};

        if (firstname != guardianInfo?.firstname) payload.firstname = firstname;
        if (lastname != guardianInfo?.lastname) payload.lastname = lastname;
        if (middlename != guardianInfo?.middlename)
          payload.middlename = middlename;
        if (gender != guardianInfo?.gender) payload.gender = gender;
        if (email != guardianInfo?.email) payload.email = email;
        if (phone != guardianInfo?.phone) payload.phone = phone;
        if (address != guardianInfo?.address) payload.address = address;

        updateGuardianInfo(payload);
        loadGuardianInfo();
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
          <div className="w-full mb-4 sm:mb-0">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              First Name*
            </label>
            <input
              name="firstname"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="First Name"
              onChange={onChange}
              value={firstname}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Last Name*
            </label>
            <input
              name="lastname"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="  Last Name"
              onChange={onChange}
              value={lastname}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
          <div className="w-full mb-4 sm:mb-0">
            <label
              htmlFor="middlename"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Middle Name*
            </label>
            <input
              name="middlename"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Middle Name"
              onChange={onChange}
              value={middlename}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Gender
            </label>
            <div className="w-full relative">
              <select
                name="gender"
                className="appearance-none block w-full px-5 py-2.5 text-sm font-normal text-rectem-grey bg-white bg-clip-padding bg-no-repeat border rounded-sm transition ease-in-out m-0 focus:text-rectem-grey focus:bg-white focus:border-rectem-50 focus:outline-none"
                onChange={onChange}
                required
                value={gender}
              >
                <option selected value="" disabled>
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
          <div className="w-full mb-4 sm:mb-0">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Email*
            </label>
            <input
              name="email"
              type="email"
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Enter Email"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Phone Number*
            </label>
            <input
              name="phone"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="(+234)"
              onChange={onChange}
              value={phone}
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
              onChange={onChange}
              value={address}
            />
          </div>
        </div>
        <NavigationBtn current={current} setCurrent={setCurrent} />
      </form>
    </div>
  );
};

export default Guardian;
