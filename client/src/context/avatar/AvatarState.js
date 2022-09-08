import React, { useReducer } from "react";
import AvatarContext from "./avatarContext";
import avatarReducer from "./avatarReducer";
import { SET_AVATAR, GET_AVATAR, REMOVE_AVATAR } from "../types";
import avatar from "../../img/avatar.jpg";

const AvatarState = (props) => {
  const initialState = {
    imgUrl: avatar,
  };

  const [state, dispatch] = useReducer(avatarReducer, initialState);

  // get avatar
  const setAvatar = () => {
    dispatch({
      type: SET_AVATAR,
      payload: "",
    });
  };

  // get avatar
  const getAvatar = () => {
    dispatch({
      type: GET_AVATAR,
      payload: "",
    });
  };

  // remove avatar
  const removeAvatar = (id) => {
    dispatch({ type: REMOVE_AVATAR, payload: id });
  };

  return (
    <AvatarContext.Provider
      value={{
        avaUrl: state.imgUrl,
        setAvatar,
        getAvatar,
        removeAvatar,
      }}
    >
      {props.children}
    </AvatarContext.Provider>
  );
};

export default AvatarState;
