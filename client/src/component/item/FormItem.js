import React from "react";
import BioForm from "../Forms/BioForm";
import AcademicForm from "../Forms/AcademicForm";
import DataForm from "../Forms/DataForm";
import MedicalReportForm from "../Forms/MedicalReportForm";
import Avatar from "../Forms/Avatar";

const FormItem = ({ current, setCurrent }) => {
  switch (current) {
    case 1:
      return <BioForm current={current} setCurrent={setCurrent} />;
    case 2:
      return <Avatar current={current} setCurrent={setCurrent} />;
    case 3:
      return <AcademicForm current={current} setCurrent={setCurrent} />;
    case 4:
      return <DataForm current={current} setCurrent={setCurrent} />;
    case 5:
      return <MedicalReportForm current={current} setCurrent={setCurrent} />;
    default:
      return <BioForm current={current} setCurrent={setCurrent} />;
  }
};

export default FormItem;
