import e from "cors";
import React, { useState } from "react";
import NavigationBtn from "../Buttons/NavigationBtn";
import { guid, jambYears } from "./script";

const Jamb = ({ current, setCurrent, user, setUser }) => {
  const [reg, setReg] = useState("");
  const [year, setYear] = useState("");
  const [subjects, setSubjects] = useState([
    {
      id: guid(),
      name: "",
      score: "",
      jamb_Reg_Number: reg ?? "",
      jamb_Year: year ?? "",
    },
  ]);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newSubjects = [...subjects];

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
  const addForm = () => {
    const payload = {
      id: guid(),
      name: "",
      score: "",
      jamb_Reg_Number: reg,
      jamb_Year: year,
    };
    if (subjects.length < 10) setSubjects([...subjects, payload]);
    if (subjects.length > 6) alert("Maximun of 8 subject");
  };

  // remove form by ID
  const remove = (id) => {
    const newSubjects = [...subjects];
    const payload = newSubjects.filter((subject) => subject.id != id);
    setSubjects(payload);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // if (subjects.length < 8) return alert("At least 8 subject is required");

    // test purpose
    setCurrent(current + 1);
  };

  console.log(subjects);

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <div className="flex w-full space-x-4 items-center">
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

        <div className="">
          <div
            type=""
            onClick={addForm}
            className="text-sm cursor-pointer bg-rectem-50 p-2  text-white flex justify-center items-center"
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
        })}

        <NavigationBtn current={current} setCurrent={setCurrent} />
      </form>
    </div>
  );
};

export default Jamb;
