import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import Button from "../Buttons/Button";

const FieldOfStudy = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { user, update } = authContext;
  const { setAlert } = alertContext;

  const [dept, setDept] = useState("");

  const onChange = (e) => setDept(e.target.value);

  useEffect(() => {
    // window.alert(dept);
  }, [dept]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (dept === "") {
      setAlert("Please Choose a fiels of study", "danger");
    } else {
      update({
        department: dept,
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex items-center flex-col space-y-4">
      <select
        name="department"
        className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
        placeholder="search"
        onChange={onChange}
      >
        <option defaultValue="true" value="" disabled>
          Choose field of study
        </option>
        <option value={`computer science`}>Computer Science</option>
        <option value={`business admin`}>Business Admin</option>
      </select>
      <button className="w-max inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-rectem-50 sm:text-base md:font-medium text-white hover:bg-opacity-90 transition ease-in focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-rectem-50  sm:w-auto text-[14px]">
        Submit
      </button>
    </form>
  );
};

export default FieldOfStudy;
