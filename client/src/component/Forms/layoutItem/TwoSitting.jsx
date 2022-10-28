import React, { useState } from "react";
import { examTypes, grade } from "../../Data/Data";
import { guid, jambYears as examYear } from "../script";

const TwoSitting = () => {
  const [result, setResult] = useState({});
  const [subjects, setSubjects] = useState([
    // { id: guid(), name: "English Language", score: "" },
  ]);

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
  const addForm = () => {
    const payload = { id: guid(), name: "", score: "" };
    if (subjects.length < 10) setSubjects([...subjects, payload]);
    if (subjects.length > 9) alert("Maximun of 10 subject");
  };

  // remove form by ID
  const remove = (id) => {
    const newSubjects = [...subjects];
    const payload = newSubjects.filter((subject) => subject.id != id);
    setSubjects(payload);
  };

  const onChange = (e) =>
    setResult({ ...result, [e.target.name]: e.target.value });
  return (
    <div className="space-y-8">
      <div>
        <div className="sm:flex w-full sm:space-x-4 space-y-4 items-end">
          <div className="w-">
            <label
              htmlFor="exam_type"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Exam Type*
            </label>
            <select
              name="exam_type"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              onChange={onChange}
            >
              <option selected value="" disabled>
                Choose exam type
              </option>

              {examTypes.map((item, i) => {
                return (
                  <option key={i} value={item.type}>
                    {item.type}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-">
            <label
              htmlFor="exam_reg_number"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Exam Reg Number*
            </label>
            <input
              value={result?.jamb_reg_number?.trim()}
              name="exam_reg_number"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Waec Reg Number"
              onChange={onChange}
            />
          </div>

          <div className="w-">
            <label
              htmlFor="exam_year"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Exam Year*
            </label>
            <select
              name="exam_year"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              onChange={onChange}
              required
            >
              <option selected value="" disabled>
                Choose year
              </option>
              {examYear}
            </select>
          </div>
        </div>

        {subjects.map((subject, index, item) => {
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
                  htmlFor={`score`}
                  className="block text-sm font-medium text-rectem-100 mb-2"
                >
                  Score
                </label>

                <select
                  name="score"
                  className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  onChange={(e) => updateScore(subject, index, e.target.value)}
                  required
                  value={subject.score}
                >
                  <option selected value="" disabled>
                    Choose Grade
                  </option>

                  {grade.map((item, i) => {
                    return (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
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
        })}

        <div className="">
          <div
            type=""
            onClick={addForm}
            className="text-sm cursor-pointer bg-rectem-50 p-2 text-white flex justify-center items-center"
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
          </div>
        </div>
      </div>

      <div>
        <div className="sm:flex w-full sm:space-x-4 space-y-4 items-end">
          <div className="w-">
            <label
              htmlFor="exam_type"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Exam Type*
            </label>
            <select
              name="exam_type"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              onChange={onChange}
            >
              <option selected value="" disabled>
                Choose exam type
              </option>

              {examTypes.map((item, i) => {
                return (
                  <option key={i} value={item.type}>
                    {item.type}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-">
            <label
              htmlFor="exam_reg_number"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Exam Reg Number*
            </label>
            <input
              value={result?.jamb_reg_number?.trim()}
              name="exam_reg_number"
              type="text"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Waec Reg Number"
              onChange={onChange}
            />
          </div>

          <div className="w-">
            <label
              htmlFor="exam_year"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Exam Year*
            </label>
            <select
              name="exam_year"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              onChange={onChange}
              required
            >
              <option selected value="" disabled>
                Choose year
              </option>
              {examYear}
            </select>
          </div>
        </div>
        <div className="">
          <div
            type=""
            onClick={addForm}
            className="text-sm cursor-pointer bg-rectem-50 p-2 text-white flex justify-center items-center"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoSitting;
