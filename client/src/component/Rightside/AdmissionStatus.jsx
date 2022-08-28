import React from "react";

const AdmissionStatus = () => {
  return (
    <div>
      <h3 className="text-xs">
        {true ? (
          <span className="bg-green-400 text-black py-1 px-1 rounded-md">
            Admitted
          </span>
        ) : (
          <span className="bg-red-400 text-black py-1 px-1 rounded-md">
            Not Admitted
          </span>
        )}
      </h3>
    </div>
  );
};

export default AdmissionStatus;
