import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { allCourse } from "../Data/Data";
import Payment from "./Payment";

const CourseReg = () => {
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
            <label className="block text-sm font-medium text-rectem-100 mb-2">
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
          <div className="flex flex-col sm:flex-row text-sm bg-red-200 p-4 sm:p-8 rounded-lg sm:space-x-4">
            <div>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>
            <p className="mt-2 sm:mt-0">
              Pls kindly make your payment to any of the school account below
              and take the teller to the school bursary office after your
              payment have been confirmed you will get access to start your
              courses registration.
            </p>
          </div>
          <Payment setIsCleared={setIsCleared} />
        </div>
      ) : (
        <div className="shadow-sm scrollbar-hide overflow-x-scroll sm:overflow-x-hidden space-y-8 pb-8">
          <div className="flex justify-between mb-8">
            <div></div>
            <form className="hidden sm:flex flex-col space-y-4">
              <div className="flex w-full space-x-4 items-center">
                <div className="w-full">
                  <label className="block text-sm font-medium text-rectem-100 mb-2">
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
          </div>
          <table className="table-auto md:table-auto border-collapse w-full text-sm overflow-x-scroll">
            <thead className="sticky top-0 bg-white h-16 shadow-sm">
              <tr>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Course Title
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Code
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Units
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Servicing Dept
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Action
                </th>
              </tr>
            </thead>
            {allCourse
              .filter((item) => {
                const regex = new RegExp(search, "gi");
                return regex === ""
                  ? item
                  : item.title.toLocaleLowerCase().includes(search) ||
                      item.code.match(regex) ||
                      item.units.match(regex) ||
                      item.department.match(regex);
              })
              .map((course, i) => {
                const isAdded = addedCourse.filter(
                  (i) => i.title === course.title
                );
                //   console.log("isAdded", isAdded);
                return (
                  <tbody key={i} className="bg-white dark:bg-slate-800">
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-3 md:pl-8 text-slate-500 dark:text-slate-400">
                        {course?.title}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-3 md:pl-8 text-slate-500 dark:text-slate-400  ">
                        {course?.code}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-3 md:pl-8 text-slate-500 dark:text-slate-400 ">
                        {course?.units}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-3 md:pl-8 text-slate-500 dark:text-slate-400">
                        {course?.department}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-3 md:pl-8 text-slate-500 dark:text-slate-400">
                        {isAdded.length === 0 ? (
                          <div onClick={() => addCourse(course)}>
                            <Button name="Add" path="#!" buttonType="light" />
                          </div>
                        ) : (
                          <div onClick={() => removeCourse(course)}>
                            <Button name="Drop" path="#!" buttonType="danger" />
                          </div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
          <button className="cursor-pointer w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-rectem-50 opacity-95 hover:opacity-100 text-base font-medium text-white focus:outline-none m-8 ml-0 sm:w-auto sm:text-sm">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseReg;
