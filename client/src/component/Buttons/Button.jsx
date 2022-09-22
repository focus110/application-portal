import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, path, buttonType }) => {
  switch (buttonType) {
    case "danger":
      return (
        <Link
          to={`${path}`}
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
        >
          {name ?? "default btn"}
        </Link>
      );
    case "disabled-btn":
      return (
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
        >
          {name ?? "default btn"}
        </button>
      );
    case "theme-btn":
      return (
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-rectem-50 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
        >
          {name ?? "default btn"}
        </button>
      );
    case "full":
      return (
        <button
          type="button"
          className="w-full text-white bg-rectem-50 hover:opacity-70 transition ease-in focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rectem-50 dark:hover:bg-rectem-50 dark:focus:ring-rectem-50"
        >
          {name ?? "default btn"}
        </button>
      );
    case "theme":
      return (
        <Link
          to={`${path}`}
          type="button"
          className="w-max inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-rectem-50 sm:text-base md:font-medium text-white hover:bg-opacity-90 transition ease-in focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-rectem-50  sm:w-auto text-[14px]"
        >
          {name ?? "default btn"}
        </Link>
      );
    default:
      return (
        <Link
          to={`${path}`}
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
        >
          {name ?? "default btn"}
        </Link>
      );
  }
};

export default Button;