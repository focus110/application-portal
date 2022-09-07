import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";

const AdmissionStatus = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <div>
      <h3 className="text-xs">
        <span
          className={
            user?.admissionStatus === "not admitted"
              ? "bg-red-600 text-white py-1 px-1 rounded-md"
              : "bg-green-600 text-white py-1 px-1 rounded-md"
          }
        >
          {user?.admissionStatus}
        </span>
      </h3>
    </div>
  );
};

export default AdmissionStatus;
