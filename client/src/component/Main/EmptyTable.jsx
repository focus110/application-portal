import React from "react";
import FieldOfStudy from "./FieldOfStudy";

const EmptyTable = () => {
  return (
    <div className="w-full flex flex-col h-48 sm:h-56 items-center justify-center bg-white space-y-4">
      <p>Choose field of study to display courses</p>
      <FieldOfStudy />
    </div>
  );
};

export default EmptyTable;
