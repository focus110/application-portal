import React from "react";
import Button from "../Buttons/Button";

const ApplicationGuide = () => {
  return (
    <div className="">
      <h3
        className="text-lg leading-6 font-medium text-gray-900 mb-2"
        id="modal-title"
      >
        2022/2023 ADMISSION IN PROGRESS -
      </h3>
      <div className="text-rectem-grey mb-5">
        <p className="text-sm text-gray-500 mb-3">
          Redeemer’s College of Technology and Management invites you to apply
          to our full-time National Diploma (ND) and Higher National Diploma
          (HND) Programmes for the 2021/2022 academic session. Fiil in your
          application details with the right details entering a wrong detail
          might attract a penalty
        </p>
        <div className="space-y-3 mb-3 text-gray-600">
          <p>◉ Create your profile</p>
          <p>◉ Jamb UTME Result or Direct Entry Form(DE)</p>
          <p>◉ O’ Level Results (WAEC | NECO | NABTEB | IGCSE)</p>
          <p>◉ Passport Photograph</p>
          <p>◉ Guardian Basic Information</p>
        </div>
        <p className="text-sm text-gray-500 ">
          For all the details that require document upload you can scan and
          upload the soft coppies
        </p>
      </div>
      <div className="space-x-4">
        <Button
          name="Start application"
          path="/profile"
          buttonType={`danger`}
        />
        <Button name="Change username" path="/settings" buttonType={`light`} />
      </div>
    </div>
  );
};

export default ApplicationGuide;
