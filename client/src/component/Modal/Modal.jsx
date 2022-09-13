import React, { useContext, useState, useRef } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import Button from "../Buttons/Button";

export const Modal = ({ id, name, showModal, setShowModal }) => {
  const closeModal = () => setShowModal((prev) => !prev);

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { update } = authContext;
  // const name = name.split(" ")[name.split(" ").length - 1] === "Password";
  const inputName = name
    .split(" ")
    [name.split(" ").length - 1].toLocaleLowerCase();

  // console.log(inputName, i);

  const [user, setUser] = useState({});

  const modalRef = useRef();

  const onClk = (e) => {
    if (modalRef.current === e.target) setShowModal(false);
  };

  const onChange = (e) => {
    // console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    // Build user object
    //  const userFields = {};
    //  if (username) userFields.username = username;
    //  if (firstname) userFields.firstname = firstname;
    //  if (lastname) userFields.lastname = lastname;
    //  if (email) userFields.email = email;
    //  if (phone) userFields.phone = phone;
    //  if (password) userFields.password = password
    e.preventDefault();
    if (user === "" || user === null) {
      setAlert("Enter all fields", "danger");
    } else if (user.password !== user.password2) {
      setAlert("Password do not match!", "danger");
    } else {
      update(user);
      setShowModal(false);
      setAlert("Success", "success");
    }
  };

  // console.log(user.password !== user.password2);

  // console.log("USER", user);

  return (
    <>
      {showModal ? (
        <div
          ref={modalRef}
          className="transition ease-in absolute items-center flex justify-center overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full"
          onClick={onClk}
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={closeModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  {name}
                </h3>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-rectem-100 mb-2">
                      Your {name.split(" ")[name.split(" ").length - 1]}
                    </label>
                    <input
                      type={
                        name.split(" ")[name.split(" ").length - 1] ===
                        "Password"
                          ? "password"
                          : name.split(" ")[name.split(" ").length - 1] ===
                            "Email"
                          ? "email"
                          : name.split(" ")[name.split(" ").length - 1] ===
                            "phone"
                          ? "phone"
                          : "text"
                      }
                      name={inputName}
                      className={`block w-full rounded-md border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50 ${
                        alertContext.alerts.length > 0
                          ? `border-red-500 transition ease-out`
                          : null
                      }`}
                      placeholder={name.split(" ")[1]}
                      required
                      onChange={onChange}
                    />
                  </div>

                  {name.split(" ")[name.split(" ").length - 1] !==
                  "Password" ? null : (
                    <div className="w-full">
                      <label className="block text-sm font-medium text-rectem-100 mb-2">
                        confirm password
                      </label>
                      <input
                        type="password"
                        name="password2"
                        className={`block w-full rounded-md border bg-white py-2.5 px-5 text-sm text-rectem-grey outline-none focus:border-rectem-50 ${
                          alertContext.alerts.length > 0
                            ? `border-red-500 transition ease-out`
                            : null
                        }`}
                        placeholder="confirm password"
                        required
                        onChange={onChange}
                      />
                    </div>
                  )}

                  <button>
                    <Button name={"Save"} path="#!" buttonType={"theme-btn"} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
