import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";

const TableFilter = ({ setSearch }) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const onChange = (e) => setSearch(e.target.value);
  const onSelect = (e) => console.log(e.target.value);

  return (
    <div className="flex justify-between mb-8">
      <div className="">
        <label
          htmlFor="department"
          className="block text-sm font-medium text-rectem-100 mb-2"
        >
          Department*
        </label>
        <input
          disabled
          name="department"
          className="block w-full rounded-sm border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50"
          placeholder="Choose field of study"
          value={
            !user?.department
              ? "Choose field of study"
              : user?.department.toUpperCase()
          }
          onChange={onSelect}
        />
      </div>
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
  );
};

export default TableFilter;
