import React, { useContext } from "react";
import { useState } from "react";
import AuthContext from "../../context/auth/authContext";
import Button from "../Buttons/Button";
import { FormHeader } from "../Data/Data";
import FormItem from "../item/FormItem";

const Profile = () => {
  const authContext = useContext(AuthContext);

  const [current, setCurrent] = useState(4);
  const [user, setUser] = useState({
    firstname: authContext?.user?.firstname,
    lastname: authContext?.user?.lastname,
    username: authContext?.user?.username,
    gender: authContext?.user?.gender,
    email: authContext?.user?.email,
    program: authContext?.user?.program,
    phone: authContext?.user?.phone,
  });

  const [file, setFile] = useState({ data: null });

  const formTitle = FormHeader.map((item, i) => {
    return (
      <p key={i} className="mb-8 font-normal text-xl">
        {current === item.id ? item.header : null}
      </p>
    );
  });

  const onSubmit = () => {
    // ;
    // setCurrent(current + 1);
  };

  // console.log(user);

  return (
    <div className="overflow-y-scroll scrollbar-hide mx-0 py-12 p-8 sm:mx-10 font-medium flex flex-col bg-white">
      <span className="not-italic tracking-tighten text-2xl font-display text-rectem-75 text-center md:text-left">
        Profile
      </span>
      <div className="not-italic tracking-tighten font-body py-8 text-2xl font-bold">
        <div className="mt-5 flex flex-col">
          <div className="flex items-center justify-between mb-12 text-[12px] sm:text-sm">
            <div className="flex items-center w-2/4 relative">
              <div
                className={`${
                  current >= 1 ? "bg-rectem-50" : "bg-rectem-grey "
                } transition ease-in rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center text-white  z-[1]`}
              >
                1
              </div>
              <hr
                className={`${
                  current >= 1 ? "bg-rectem-50" : "bg-rectem-grey "
                }  transition ease-in w-full h-[3px] sm:h-[4.7px] absolute`}
              />
            </div>
            <div className="flex items-center w-2/4 relative">
              <div
                className={`${
                  current >= 2 ? "bg-rectem-50" : "bg-rectem-grey "
                }  transition ease-in rounded-full w-8 h-8 sm:w-10 sm:h-10  flex justify-center items-center text-white  z-[1]`}
              >
                2
              </div>
              <hr
                className={`${
                  current >= 2 ? "bg-rectem-50" : "bg-rectem-grey "
                }  transition ease-in w-full h-[3px] sm:h-[4.7px] absolute`}
              />
            </div>
            <div className="flex items-center w-2/4 relative">
              <div
                className={`${
                  current >= 3 ? "bg-rectem-50" : "bg-rectem-grey "
                } transition ease-in rounded-full w-8 h-8 sm:w-10 sm:h-10  flex justify-center items-center text-white z-[1]`}
              >
                3
              </div>
              <hr
                className={`${
                  current >= 3 ? "bg-rectem-50" : "bg-rectem-grey "
                }  transition ease-in w-full h-[3px] sm:h-[4.7px] absolute`}
              />
            </div>
            <div className="flex items-center w-2/4 relative">
              <div
                className={`${
                  current >= 4 ? "bg-rectem-50" : "bg-rectem-grey "
                }  transition ease-in rounded-full w-8 h-8 sm:w-10 sm:h-10  flex justify-center items-center text-white z-[1]`}
              >
                4
              </div>
              <hr
                className={`${
                  current >= 4 ? "bg-rectem-50" : "bg-rectem-grey "
                }  transition ease-in w-full h-[3px] sm:h-[4.7px] absolute`}
              />
            </div>
            <div className="w-auto">
              <div
                className={`${
                  current >= 5 ? "bg-rectem-50" : "bg-rectem-grey "
                } transition ease-in rounded-full w-8 h-8 sm:w-10 sm:h-10  flex justify-center items-center text-white z-[1]`}
              >
                5
              </div>
            </div>
            {/* <hr className="border-rectem-50 border-[2px]" /> */}
            {/* {form.map((item) => {
              const lastItem = form.length - 1 + 1;
              return item.id === lastItem.toString() ? (
                <hr
                  key={item?.id}
                  className="border-rectem-50 w-14 border-[2px]"
                />
              ) : (
                ""
              );
            })} */}
          </div>

          <div className="flex justify-center items-center">{formTitle}</div>

          <div className="flex flex-col h-full w-full">
            <FormItem
              user={user}
              setUser={setUser}
              current={current}
              setCurrent={setCurrent}
              onSubmit={onSubmit}
              file={file}
              setFile={setFile}
            />
          </div>
          {/* <div className="flex space-x-8">
            {current <= 1 ? (
              <Button name="Back" path="#!" buttonType={`disabled`} />
            ) : (
              <div onClick={() => setCurrent(current - 1)}>
                <Button name="Back" path="#!" buttonType={`theme`} />
              </div>
            )}

            {current >= 5 ? (
              <Button name="Next" path="#!" buttonType={`disabled`} />
            ) : (
              <div onClick={onSubmit}>
                <Button name="Next" path="#!" buttonType={`theme`} />
              </div>
            )}
          </div> */}
          {/* {FormHeader.map((form, index) => {
            return (
              <div key={index} className="flex flex-row gap-7">
                <div className="flex flex-col items-center">
                  <form.check
                    className={
                      "w-6 text-rectem-50 -m-1 p-0 rounded-full shadow-lg"
                    }
                  />
                  <div
                    className={
                      form.header === "Payment"
                        ? ""
                        : "border-l-2 border-rectem-50 h-11 "
                    }
                  ></div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-rectem-50 text-sm font-medium">
                    <span>{form.header}</span>
                  </div>
                  <div className="text-rectem-red text-xs font-medium">
                    <button>
                      <span>Edit</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
