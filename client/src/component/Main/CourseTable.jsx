import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import Button from "../Buttons/Button";

const CourseTable = ({
  allCourse,
  search,
  addCourse,
  removeCourse,
  addedCourse,
}) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <table className="table-auto md:table-auto border-collapse w-full text-sm overflow-x-scroll">
      <thead className="sticky top-0 bg-white h-16 shadow-sm">
        <tr>
          <th className="border-b font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 text-left">
            Course Title
          </th>
          <th className="border-b font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 text-left">
            Code
          </th>
          <th className="border-b font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 text-left">
            Units
          </th>
          <th className="border-b font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 text-left">
            Servicing Dept
          </th>
          <th className="border-b font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 text-left">
            Action
          </th>
        </tr>
      </thead>
      {!user?.department
        ? null
        : allCourse
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
              return (
                <tbody key={i} className="bg-white ">
                  <tr>
                    <td className="border-b border-slate-100 p-4 pl-3 md:pl-8 text-slate-500">
                      {course?.title}
                    </td>
                    <td className="border-b border-slate-100 p-4 pl-3 md:pl-8 text-slate-500  ">
                      {course?.code}
                    </td>
                    <td className="border-b border-slate-100 p-4 pl-3 md:pl-8 text-slate-500 ">
                      {course?.units}
                    </td>
                    <td className="border-b border-slate-100 p-4 pl-3 md:pl-8 text-slate-500">
                      {course?.department}
                    </td>
                    <td className="border-b border-slate-100 p-4 pl-3 md:pl-8 text-slate-500">
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
  );
};

export default CourseTable;
