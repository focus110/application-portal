import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { removeAlert } = alertContext;

  // const [id, setId] = useState("");
  //   removeAlert(id);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(
      (alert) => (
        <div
          key={alert.id}
          className={`${
            alert.type === "danger"
              ? `bg-red-100 text-red-700`
              : `bg-green-100 text-green-700`
          } z-20 transition ease-in flex p-4 mb-4 text-sm rounded-lg dark:bg-red-200 dark:text-red-800 absolute w-max sm:w-[40%] -translate-x-[50%] top-[13%] left-[50%] sm:top-[12%]`}
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            onClick={() => removeAlert(alert.id)}
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          {/* <span className="sr-only">Info</span> */}
          <div>
            <span className="font-medium">
              {alert.type === "danger" ? "" : " Success"}{" "}
            </span>
            {alert?.msg}
          </div>
        </div>
      )

      // return (
      //   alertContext.alerts.length > 0 &&
      //   alertContext.alerts.map((alert) => (
      //     <div
      //       key={alert.id}
      //       className={`bg-red-500 flex justify-between text-white p-2 alert-${alert.type}`}
      //     >
      //       <svg
      //         fill="none"
      //         viewBox="0 0 24 24"
      //         strokeWidth={1.5}
      //         stroke="currentColor"
      //         className="w-6 h-6"
      //       >
      //         <path
      //           strokeLinecap="round"
      //           strokeLinejoin="round"
      //           d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      //         />
      //       </svg>{" "}
      //       {" " + alert.msg}
      //       <svg
      //         fill="none"
      //         viewBox="0 0 24 24"
      //         strokeWidth={1.5}
      //         stroke="currentColor"
      //         className="w-6 h-6 cursor-pointer"
      //         onClick={() => {
      //           removeAlert(alert.id);
      //         }}
      //       >
      //         <path
      //           strokeLinecap="round"
      //           strokeLinejoin="round"
      //           d="M6 18L18 6M6 6l12 12"
      //         />
      //       </svg>
      //     </div>
      // )
    )
  );
};

export default Alert;
