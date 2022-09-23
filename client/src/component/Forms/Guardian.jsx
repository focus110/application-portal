import React from "react";
import NavigationBtn from "../Buttons/NavigationBtn";

const Guardian = ({ current, setCurrent, user, setUser }) => {
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
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
            />
          </div>
        </div>

        <div className="flex w-full space-x-4 items-center">
          <div className="w-full">
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
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Phone Number*
            </label>
            <input
              name="phone"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Phone Number"
              onChange={onChange}
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
            />
          </div>
        </div>
        <NavigationBtn current={current} setCurrent={setCurrent} />
      </form>
    </div>
  );
};

export default Guardian;
