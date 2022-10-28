import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";

const StudentInfo = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <div className="border mb-8 bg-white">
      <h2 className="py-4 bg-rectem-50 text-white px-4 font-semibold">
        Student Info
      </h2>

      <div className="md:flex bg-slate-100 p-4 sm:p-8 md:p-0 ">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 w-full">
          <div className="flex items-center">
            <figcaption className="w-full text-left font-medium">
              <div className="text-rectem-50 ">Matric No</div>
              <div className="text-slate-700 ">
                {!user?.matric_no?.toUpperCase()
                  ? "-- -- -- --"
                  : user?.matric_no?.toUpperCase()}
              </div>
            </figcaption>
            <figcaption className="w-full text-left font-medium">
              <div className="text-rectem-50 ">Department</div>
              <div className="text-slate-700 ">
                {`${
                  !user?.department?.toUpperCase()
                    ? "-- -- -- --"
                    : user?.department?.toUpperCase()
                }`}
              </div>
            </figcaption>
          </div>
          <div className="flex items-center">
            <figcaption className="w-full text-left font-medium">
              <div className="text-rectem-50 ">Session</div>
              <div className="text-slate-700 ">
                {`${user?.session?.toUpperCase()} `}
              </div>
            </figcaption>

            {/* <figcaption className="w-full text-left font-medium">
              <div className="text-rectem-50 ">School</div>
              <div className="text-slate-700 ">
                {`SCHOOL OF ${
                  user?.school?.toUpperCase() ?? "SCIENCE AND TECHNOLOGY"
                }`}
              </div>
            </figcaption> */}

            <figcaption className="w-full text-left font-medium">
              <div className="text-rectem-50 ">Program</div>
              <div className="text-slate-700 ">
                {user?.program?.toUpperCase()}
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
