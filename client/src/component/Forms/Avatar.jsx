import React, { useContext, useState } from "react";
import AvatarContext from "../../context/avatar/avatarContext";
import Button from "../Buttons/Button";

const Avatar = ({ setCurrent }) => {
  const avatarContext = useContext(AvatarContext);
  const { avaUrl } = avatarContext;

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose Image");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
    state: "",
    lga: "",
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={avaUrl}
        alt="Profile Pic"
        className="rounded-full mb-8 h-40 w-40 md:h-36 md:w-36 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
      />
      <form>
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          accept="image/*"
          onChange={onChange}
        />
        <label
          className="border-rectem-50 border-[1px] rounded-sm py-2 px-4 cursor-pointer text-base font-normal"
          htmlFor="file"
        >
          {filename}
        </label>
      </form>
    </div>
  );
};

export default Avatar;
