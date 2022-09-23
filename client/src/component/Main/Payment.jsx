import React from "react";

const Payment = ({ setIsCleared }) => {
  return (
    <div className="bg-white md:w-3/4 lg:w-5/6 shadow-box flex flex-col space-y- mt-16 p-4 sm:p-8">
      <div className="text-center mt-4">
        <span className="tracking-tighten not-italic font-body text-black font-bold text-2xl">
          Make Payment
        </span>
      </div>{" "}
      <div className="flex flex-col text-center mt-4">
        <span className="font-medium text-sm text-rectem-grey tracking-tighten not-italic">
          You need to pay your school fees before you can start your course
          registration
        </span>
      </div>
      <div className="space-y-4 mt-8">
        <div className="flex justify-between border-b py-4 px-2 text-sm sm:text-base text-gray-500 font-semibold">
          <p>Amount</p>
          <p>Deposite or Full</p>
        </div>
        <div className="flex justify-between border-b py-4 px-2 text-sm sm:text-base text-gray-500 font-semibold">
          <p>Account Number</p>
          <p>1234567890</p>
        </div>
        <div className="flex justify-between border-b py-4 px-2 text-sm sm:text-base text-gray-500 font-semibold">
          <p>Bank name</p>
          <p>WEMA BANK</p>
        </div>
        <div className="flex justify-between border-b py-4 px-2 text-sm sm:text-base text-gray-500 font-semibold">
          <p>Beneficiary name</p>
          <p>Rectem Limited</p>
        </div>
      </div>
      <button
        onClick={() => setIsCleared(true)}
        className="cursor-pointer w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-4 bg-rectem-50 opacity-95 hover:opacity-100 text-base font-medium text-white focus:outline-none mt-8 sm:m-8 sm:w-auto sm:text-sm"
      >
        I have made bank transfer
      </button>
      {/* <Link
    to="#!"
    className="text-center h-8 bg-rectem-50 rounded-3xl"
    onClick={() => setIsCleared(true)}
  >
    <span className="tracking-tighten not-italic font-bold text-xs font-body text-white">
      Make Payment
    </span>
  </Link> */}
    </div>
  );
};

export default Payment;
