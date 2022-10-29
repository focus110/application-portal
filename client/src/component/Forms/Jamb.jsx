import e from "cors";
import React, { useState } from "react";
import { useRef } from "react";
import NavigationBtn from "../Buttons/NavigationBtn";
import { grade } from "../Data/Data";
import EmptyTable from "../Main/EmptyTable";
import { guid, jambYears } from "./script";

const Jamb = ({ current, setCurrent, user, setUser }) => {
  const [reg, setReg] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [score, setScore] = useState("");
  const [subjects, setSubjects] = useState([]);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newSubjects = [...subjects];

    if (name === "subject") setTitle(value);
    if (name === "score") setScore(value);

    if (name === "jamb_reg_number") {
      setReg(value);
      newSubjects?.forEach((element) => {
        element.jamb_Reg_Number = value;
      });
    }

    if (name === "jamb_year") {
      setYear(value);
      newSubjects?.forEach((element) => {
        element.jamb_Year = value;
      });
    }

    setSubjects(newSubjects);
  };

  const updateSubject = (subject, index, value) => {
    const newSubjects = [...subjects];
    newSubjects[index].name = value;

    setSubjects(newSubjects);
  };

  const updateScore = (subject, index, value) => {
    const newSubjects = [...subjects];
    newSubjects[index].score = value;
    setSubjects(newSubjects);
  };

  // add new form
  const addSubject = () => {
    let msg = "";

    subjects.forEach((subject) => {
      if (subject.name === title) msg = "Subject already exit";
    });

    if (msg === "") {
      const payload = {
        id: guid(),
        name: title,
        score: score,
        jamb_Reg_Number: reg,
        jamb_Year: year,
      };

      if (subjects.length < 10) setSubjects([...subjects, payload]);
      if (subjects.length > 6) alert("Maximun of 8 subject");

      setTitle("");
      setScore("");
    } else {
      alert(msg);
    }
  };

  // remove form by ID
  const remove = (id) => {
    const newSubjects = [...subjects];
    const payload = newSubjects.filter((subject) => subject.id != id);
    setSubjects(payload);
  };

  const nextPage = (e) => {
    e.preventDefault();

    // diabled validation for test purpose
    // if (subjects.length < 6) alert("Subject must be up to 6");
    // if (subjects.length > 5) setCurrent(current + 1);

    setCurrent(current + 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // if (subjects.length < 8) return alert("At least 8 subject is required");
    addSubject();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col space-y-4 pb-8">
        <div className="flex w-full space-x-4 items-end">
          <div className="w-full">
            <label
              htmlFor="jamb_reg_number"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Jamb Reg Number*
            </label>
            <input
              value={user?.jamb_reg_number?.trim()}
              name="jamb_reg_number"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Jamb Reg Number"
              onChange={onChange}
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="jamb_year"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Jamb Year*
            </label>
            <select
              value={user?.jamb_reg_number?.trim()}
              name="jamb_year"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              onChange={onChange}
              required
            >
              <option selected value="" disabled>
                Choose year
              </option>
              {jambYears}
            </select>
          </div>
        </div>

        <div className="flex items-end w-full space-x-4 pb-8">
          <div className="w-[60%] sm:w-[40%]">
            <label
              htmlFor={`subject`}
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              subjects
            </label>
            <input
              value={title}
              onChange={onChange}
              name="subject"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder={`subject`}
              required
            />
          </div>

          <div className="w-[30%] sm:w-[40%]">
            <label
              htmlFor={`score`}
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Score
            </label>
            <input
              name="score"
              type="number"
              min="0"
              max="100"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Max score 100"
              onChange={onChange}
              required
              value={score}
            />
          </div>

          <div className="hidden sm:block w-[20%]">
            <button className="w-full text-sm cursor-pointer bg-rectem-50 p-2 text-white flex justify-center items-center">
              Add subject
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="pl-2 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="block sm:hidden pb-8">
          <button
            type=""
            className="w-full text-sm cursor-pointer bg-rectem-50 p-2  text-white flex justify-center items-center"
          >
            Add subject
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="pl-2 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        {subjects.length === 0 ? (
          <div className="text-center py-4 sm:py-8">
            <p>Table empty add your subjects</p>
          </div>
        ) : (
          <table className="table-auto md:table-auto border-collapse w-full text-sm overflow-x-scroll">
            <thead className="sticky top-0 bg-white h-16 shadow-sm">
              <tr>
                <th className="border-b font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 text-left">
                  Subject
                </th>
                <th className="border-b font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 text-left">
                  Score
                </th>
                <th className="border-b font-medium p-4 pl-3 md:pl-8 pt-0 pb-3 text-slate-400 text-left">
                  Action
                </th>
              </tr>
            </thead>
            {subjects.map((item, i) => {
              return (
                <tbody key={i} className="bg-white">
                  <tr>
                    <td className="border-b border-slate-100 p-2 pl-3 md:pl-8 text-slate-500">
                      {`${i + 1}. `} {item.name}
                    </td>
                    <td className="border-b border-slate-100 p-2 pl-3 md:pl-8 text-slate-500  ">
                      {item.score}
                    </td>
                    <td className="border-b border-slate-100 p-2 pl-3 md:pl-8 text-slate-500">
                      <div className="w-auto sm:w-full">
                        <div
                          onClick={() => remove(item.id)}
                          className="cursor-pointer bg-red-400 p-2 rounded-full text-white w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}

        {/* {subjects.map((subject, index, item) => {
          const sn = index + 1;

          return (
            <div key={index} className="flex w-full space-x-4 items-center">
              <div className="w-[60%] sm:w-full">
                <label
                  htmlFor={`subject_${sn}`}
                  className="block text-sm font-medium text-rectem-100 mb-2"
                >
                  subjects {sn}
                </label>
                <input
                  name="subjects"
                  type="text"
                  className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder={`subjects ${sn}`}
                  onChange={(e) =>
                    updateSubject(subject, index, e.target.value)
                  }
                  required
                  value={subject.name}
                />
              </div>
              <div className="w-[30%] sm:w-full">
                <label
                  htmlFor={`score_${sn}`}
                  className="block text-sm font-medium text-rectem-100 mb-2"
                >
                  Score
                </label>
                <input
                  name="score"
                  type="number"
                  min="0"
                  max="100"
                  className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder="Max score 100"
                  onChange={(e) => updateScore(subject, index, e.target.value)}
                  required
                  value={subject.score}
                />
              </div>
              <div className="w-auto sm:w-full">
                <label
                  htmlFor="id"
                  className="block text-sm font-medium text-rectem-100 mb-2"
                >
                  remove
                </label>

                <div
                  onClick={() => remove(subject.id)}
                  className="cursor-pointer bg-red-400 p-2 rounded-full text-white w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })} */}
      </form>

      <form onSubmit={nextPage} className="pt-8">
        <NavigationBtn current={current} setCurrent={setCurrent} />
      </form>
    </div>
  );
};

export default Jamb;
