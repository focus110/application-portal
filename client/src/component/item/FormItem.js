import React from "react";
import BioForm from "../Forms/BioForm";
import AcademicForm from "../Forms/AcademicForm";
import DataForm from "../Forms/DataForm";
import MedicalReportForm from "../Forms/MedicalReportForm";
import Avatar from "../Forms/Avatar";

const FormItem = ({ current, setCurrent, user, setUser, file, setFile }) => {
  switch (current) {
    case 1:
      return (
        <BioForm
          current={current}
          setCurrent={setCurrent}
          user={user}
          setUser={setUser}
        />
      );
    case 2:
      return (
        <Avatar
          current={current}
          setCurrent={setCurrent}
          user={user}
          setUser={setUser}
          file={file}
          setFile={setFile}
        />
      );
    case 3:
      return (
        <AcademicForm
          current={current}
          setCurrent={setCurrent}
          user={user}
          setUser={setUser}
        />
      );
    case 4:
      return (
        <DataForm
          current={current}
          setCurrent={setCurrent}
          user={user}
          setUser={setUser}
        />
      );
    case 5:
      return (
        <MedicalReportForm
          current={current}
          setCurrent={setCurrent}
          user={user}
          setUser={setUser}
        />
      );
    default:
      return (
        <BioForm
          current={current}
          setCurrent={setCurrent}
          user={user}
          setUser={setUser}
        />
      );
  }
};

export default FormItem;
