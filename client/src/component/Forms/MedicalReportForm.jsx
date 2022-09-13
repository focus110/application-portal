import React, { useState } from "react";
import NavigationBtn from "../Buttons/NavigationBtn";

const MedicalReportForm = ({ user, setUser, current, setCurrent }) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose file");

  const onChoose = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (user === "" || user === null) {
      console.log("Enter all fields");
    } else {
      console.log("submitted");
      // update(user);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={""}
        alt="file"
        className="bg-gray-400 rounded-md mb-8 h-40 w-40 md:h-36 md:w-36 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
      />
      <form onSubmit={onSubmit}>
        <div className="flex flex-col mb-6">
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            accept="image/*"
            onChange={onChoose}
          />
          <label
            className="border-rectem-50 border-[1px] rounded-sm py-2 px-4 cursor-pointer text-base font-normal"
            htmlFor="file"
          >
            {filename}
          </label>
        </div>
        <div className="flex w-full space-x-4 items-center">
          <div className="w-full">
            <label className="block text-sm font-medium text-rectem-100 mb-2">
              Text
            </label>
            <textarea
              name="textarea"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-3 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="firstname"
              onChange={onChange}
            />
          </div>
        </div>
        <NavigationBtn current={current} setCurrent={setCurrent} />
      </form>
    </div>
  );
};

export default MedicalReportForm;
