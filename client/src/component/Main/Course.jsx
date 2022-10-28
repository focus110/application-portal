import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { allCourse } from "../Data/Data";
import Payment from "./Payment";
import Warning from "./Warning";
import TableFilter from "./TableFilter";
import EmptyTable from "./EmptyTable";
import CourseTable from "./CourseTable";

import AuthContext from "../../context/auth/authContext";

const CourseReg = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const [addedCourse, setAddedCourse] = useState([]);
  const [isCleared, setIsCleared] = useState(false);
  const [search, setSearch] = useState("");

  const addCourse = (item) => {
    setAddedCourse([...addedCourse, item]);
  };
  const removeCourse = (item) => {
    const removeItem = addedCourse.filter((i) => i.title !== item.title);
    setAddedCourse(removeItem);
  };

  const onChange = (e) => setSearch(e.target.value);

  return (
    <div className="overflow-y-scroll scrollbar-hide pt-8 p-4 md:p-10 md:pb-4 font-medium font-display flex flex-col mt-12 lg:mt-2 bg-gray-50 space-y-8">
      <span className="not-italic tracking-tighten md:text-2xl text-rectem-75 text-center md:text-left">
        Course Registration
      </span>
      <form className="flex sm:hidden flex-col space-y-4">
        <div className="flex w-full space-x-4 items-center">
          <div className="w-full">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Search
            </label>
            <input
              name="search"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="search"
              onChange={onChange}
            />
          </div>
        </div>
      </form>

      {!isCleared ? (
        <div className="justify-between items-center">
          <Warning />
          <Payment setIsCleared={setIsCleared} />
        </div>
      ) : (
        <div className="shadow-sm scrollbar-hide overflow-x-scroll sm:overflow-x-hidden space-y-8 pb-8">
          <TableFilter setSearch={setSearch} />
          <CourseTable
            allCourse={allCourse}
            search={search}
            addCourse={addCourse}
            removeCourse={removeCourse}
            addedCourse={addedCourse}
          />
          {!user?.department ? (
            <EmptyTable />
          ) : (
            <button className="cursor-pointer w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-rectem-50 opacity-95 hover:opacity-100 text-base font-medium text-white focus:outline-none m-8 ml-0 sm:w-auto sm:text-sm">
              Save
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseReg;
