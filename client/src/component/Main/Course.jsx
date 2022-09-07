import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { allCourse } from "../Data/Data";

const CourseReg = () => {
  const [addedCourse, setAddedCourse] = useState([]);
  const [isCleared, setIsCleared] = useState(false);

  const addCourse = (item) => {
    setAddedCourse([...addedCourse, item]);
  };
  const removeCourse = (item) => {
    const removeItem = addedCourse.filter((i) => i.title !== item.title);
    setAddedCourse(removeItem);
  };

  return (
    <div className="pt-8 md:p-10 font-medium font-display flex flex-col mt-12 lg:mt-2 bg-white">
      <span className="not-italic tracking-tighten text-2xl text-rectem-75 text-center md:text-left">
        Course Registration
      </span>
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
        <div className="shadow-sm overflow-hidden my-8">
          <table className="table-auto md:table-fixed border-collapse w-full text-sm">
            <thead>
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
            {allCourse.map((course, i) => {
              const isAdded = addedCourse.filter(
                (i) => i.title === course.title
              );
              //   console.log("isAdded", isAdded);
              return (
                <tbody key={i} className="bg-white dark:bg-slate-800">
                  <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-3 md:pl-8 text-slate-500 dark:text-slate-400  overflow-hidden">
                      {course?.title}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-3 md:pl-8 text-slate-500 dark:text-slate-400  overflow-hidden">
                      {course?.code}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-3 md:pl-8 text-slate-500 dark:text-slate-400 overflow-hidden">
                      {course?.units}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-3 md:pl-8 text-slate-500 dark:text-slate-400 overflow-hidden">
                      {course?.department}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-3 md:pl-8 text-slate-500 dark:text-slate-400 overflow-hidden">
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
