import React, { useState } from "react";
import NavigationBtn from "../Buttons/NavigationBtn";
import { arr } from "../Data/Data";

const Jamb = ({ current, setCurrent, user, setUser }) => {
  const [sub, setSub] = useState([]);
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onFChange = (e) =>
    setSub([...sub, { [e.target.name]: e.target.value }]);
  console.log(sub);

  const jambYears = arr.map((item, i) => {
    return (
      <option key={i} value={item}>
        {item}
      </option>
    );
  });

  // const onChange = (e) => setSub([]);

  const onClick = () => {
    const payload = { id: "", subject: "", score: "" };
    setSub([...sub, payload]);
  };
  const remove = (item) => {
    const payload = sub.filter((item) => item);
    setSub([...sub, payload]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (user === "" || user === null) {
      console.log("Enter all fields");
    } else {
      setCurrent(current + 1);
      console.log("submitted");
      // update(user);
    }
  };
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
              name="jamb_year"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              onChange={onChange}
            >
              <option selected value="" disabled>
                Choose year
              </option>
              {jambYears}
            </select>
          </div>
        </div>

        <div className="flex w-full space-x-4 items-center">
          <div className="w-[60%] sm:w-full">
            <label
              htmlFor="subject_1"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Subject 1
            </label>
            <input
              disabled
              value="english language"
              name="subject_1"
              type="text"
              className="cursor-not-allowed block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="English Language"
              onChange={onChange}
            />
          </div>
          <div className="w-[30%] sm:w-full">
            <label
              htmlFor="score"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              Score
            </label>
            <input
              name="score_1"
              type="number"
              min="0"
              max="100"
              className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
              placeholder="Max score 100"
              onChange={onChange}
            />
          </div>
          <div className="w-[10%] sm:w-full">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-rectem-100 mb-2"
            >
              action
            </label>
            <div
              onClick={onClick}
              className="cursor-pointer bg-rectem-50 p-2 rounded-full text-white w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
            >
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>

        {sub.map((item, i) => {
          return (
            <div key={i} className="flex w-full space-x-4 items-center">
              <div className="w-[60%] sm:w-full">
                <label
                  htmlFor={`subject_${i + 2}`}
                  className="block text-sm font-medium text-rectem-100 mb-2"
                >
                  Subject {i + 2}
                </label>
                <input
                  name={`subject_${i + 2}`}
                  type="text"
                  className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder={`Subject ${i + 2}`}
                  onChange={onFChange}
                />
              </div>
              <div className="w-[30%] sm:w-full">
                <label
                  htmlFor={`score_${i + 2}`}
                  className="block text-sm font-medium text-rectem-100 mb-2"
                >
                  Score
                </label>
                <input
                  name={`score_${i + 2}`}
                  type="number"
                  min="0"
                  max="100"
                  className="block w-full rounded-sm border bg-white py-2.5 px-2 sm:px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
                  placeholder="Max score 100"
                  onChange={onFChange}
                />
              </div>
              <div className="w-auto sm:w-full">
                <label
                  htmlFor="id"
                  className="block text-sm font-medium text-rectem-100 mb-2"
                >
                  action
                </label>
                <div
                  onClick={(item) => remove(item)}
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
