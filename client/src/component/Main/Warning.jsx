import React from "react";

const Warning = () => {
  return (
    <div className="flex flex-col sm:flex-row text-sm bg-red-200 p-4 sm:p-8 rounded-lg sm:space-x-4">
      <div>
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
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </div>
      <p className="mt-2 sm:mt-0">
        Pls kindly make your payment to the school account below and take the
        teller or printed reciept to the school bursary office after your
        payment have been confirmed you will get access to start your courses
        registration.
      </p>
    </div>
  );
};

export default Warning;
