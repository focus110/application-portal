import React from "react";
import NavigationBtn from "../Buttons/NavigationBtn";

const DataForm = ({ current, setCurrent, user, setUser }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (user === "" || user === null) {
      console.log("Enter all fields");
    } else {
      setCurrent(current + 1);
      console.log("submitted");
      // update(user);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type={`text`} placeholder="text" />
        <NavigationBtn current={current} setCurrent={setCurrent} />
      </form>
    </div>
  );
};

export default DataForm;
