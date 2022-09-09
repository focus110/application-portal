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
    case "disabled":
      return (
        <button
          type="button"
          disabled
          className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
        >
          {name ?? "default btn"}
        </button>
      );
    case "theme":
      return (
        <Link
          to={`${path}`}
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-rectem-50 text-base font-medium text-white hover:bg-opacity-90 transition ease-in focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-rectem-50  sm:w-auto sm:text-sm"
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
