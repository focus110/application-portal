import React, { useContext, useState } from "react";
import AvatarContext from "../../context/avatar/avatarContext";
import AlertContext from "../../context/alert/alertContext";
import NavigationBtn from "../Buttons/NavigationBtn";
import user_img from "../../img/user.png";
import Alert from "../Main/Alert";

const Avatar = ({ current, setCurrent, user, setUser, file, setFile }) => {
  const avatarContext = useContext(AvatarContext);
  const alertContext = useContext(AlertContext);

  const { avaUrl, setAvatar, getAvatar } = avatarContext;
  const { alerts, setAlert } = alertContext;

  // const [filename, setFilename] = useState("Choose Image");
  // const [file, setFile] = useState("");

  const onChange = (e) => {
    // setFile(e.target.files[0]);

    setFile({ data: null || URL.createObjectURL(e.target.files[0]) });
    // setFilename(e.target.files[0].name);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (file.data === null) {
      setAlert("Choose a file", "danger");
    } else {
      formData.append("upload", file);
      setAvatar(formData);
      setCurrent(current + 1);
      // setFile("");
      // setFilename("");
      // setAlert("Avatar Upadated", "success");
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center">
        <div></div>
        <img
          src={file?.data ?? user_img}
          alt="Profile Pic"
          className="bg-rectem-25 rounded-full object-cover mb-8 h-40 w-40 md:h-36 md:w-36 lg:h-36 lg:w-36 xl:h-40 xl:w-40 text-sm font-normal"
        />
      </div>
      <form onSubmit={onSubmit} className="items-start">
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          accept="image/*"
          onChange={onChange}
        />
        <h2 className="text-md font-normal text-sm mb-4">
          {file?.name ?? "Choose Image"}
          <div className="text-xs sm:text-base text-red-500">
            {alerts.length > 0
              ? alerts.map((alert) => {
                  return alert.msg;
                })
              : null}
          </div>
        </h2>
        <label
          className="border-rectem-50 border-[1px] rounded-sm py-2 px-4 cursor-pointer text-base font-normal"
          htmlFor="file"
        >
          <span> Choose image</span>
        </label>

        <div className="pt-8">
          <NavigationBtn current={current} setCurrent={setCurrent} />
        </div>
      </form>
    </div>
  );
};

export default Avatar;
