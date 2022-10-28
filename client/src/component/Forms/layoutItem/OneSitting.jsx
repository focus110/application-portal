import React, { useState } from "react";
import { examTypes } from "../../Data/Data";
import { guid, jambYears as examYear } from "../script";

const OneSitting = ({ addForm }) => {
  const [regNo, setRegNo] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [subjects, setSubjects] = useState([
    {
      id: guid(),
      name: "",
      score: "",
      exam_type: type ?? "",
      exam_reg_number: regNo ?? "",
      exam_year: year ?? "",
    },
  ]);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newSubjects = [...subjects];

    if (name === "exam_type") {
      setType(value);
      newSubjects?.forEach((element) => {
        element.exam_type = value;
      });
    }

    if (name === "exam_reg_number") {
      setRegNo(value);
      newSubjects?.forEach((element) => {
        element.exam_reg_number = value;
      });
    }

    if (name === "exam_year") {
      setYear(value);
      newSubjects?.forEach((element) => {
        element.exam_year = value;
      });
    }

    setSubjects(newSubjects);
  };

  // console.log(subjects);

  return (
    <div className="sm:flex w-full sm:space-x-4 space-y-4 items-end">
      <div className="w-">
        <label
          htmlFor="exam_type"
          className="block text-sm font-medium text-rectem-100 mb-2"
        >
          Exam Type*
        </label>
        <select
          value={type}
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
          value={regNo?.trim()}
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
          value={year}
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
  );
};

export default OneSitting;
