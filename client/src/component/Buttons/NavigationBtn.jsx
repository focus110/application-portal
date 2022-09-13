import React from "react";

const NavigationBtn = ({ current, setCurrent }) => {
  // console.log("current", current);

  const onClick = () => setCurrent(current - 1);
  return (
    <div className="flex space-x-8">
      {current <= 1 ? (
        // <Button name="Back" path="#!" buttonType={`disabled`} />
        <button
          disabled
          className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
        >
          Back
        </button>
      ) : (
        <div
          onClick={onClick}
          className="cursor-pointer w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-rectem-50 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
        >
          Back
        </div>
      )}

      {current >= 5 ? (
        <button
          disabled
          className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
        >
          Submit form
        </button>
      ) : (
        <button className="w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-rectem-50 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm">
          Next
        </button>
      )}
    </div>
  );
};

export default NavigationBtn;
