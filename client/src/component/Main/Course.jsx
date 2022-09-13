import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { allCourse } from "../Data/Data";

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
    <div className="pt-8 md:p-10 font-medium font-display flex flex-col mt-12 lg:mt-2 bg-white overflow-y-scroll scrollbar-hide space-y-8">
      <span className="not-italic tracking-tighten md:text-2xl text-rectem-75 text-center md:text-left">
        Course Registration
      </span>
      <div className="flex justify-between mb-8">
        <div></div>
        <form className="flex flex-col space-y-4">
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
      {!isCleared ? (
        <div className="justify-between items-center">
          <div className="bg-white md:w-3/4 lg:w-5/6 h-4/5 md:h-3/4 lg:h-4/5 mt-16 p-12 shadow-box flex flex-col justify-between">
            <div className="text-center mt-3">
              <span className="tracking-tighten not-italic font-body text-black font-bold text-2xl">
                Make Payment
              </span>
            </div>
            <div className="text-center">
              <span className="font-normal text-sm text-rectem-grey tracking-tighten not-italic">
                You need to make payment before you can start your course
                registration
              </span>
            </div>
            <Link
              to="#!"
              className="text-center h-8 bg-rectem-50 rounded-3xl"
              onClick={() => setIsCleared(true)}
            >
              <span className="tracking-tighten not-italic font-bold text-xs font-body text-white">
                Make Payment
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="shadow-sm my-8 overflow-x-scroll">
          <table className="table-auto md:table-auto border-collapse w-full text-sm overflow-x-scroll">
            <thead className="">
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
        </div>
      )}
    </div>
  );
};

export default CourseReg;
