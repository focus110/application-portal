import React, { useReducer } from "react";
import AvatarContext from "./avatarContext";
import avatarReducer from "./avatarReducer";
import {
  SET_AVATAR,
  GET_AVATAR,
  REMOVE_AVATAR,
  SETAVATAR_FAIL,
} from "../types";
import avatar from "../../img/avatar.jpg";
import axios from "axios";

const AvatarState = (props) => {
  const initialState = {
    imgUrl: "",
  };

  const [state, dispatch] = useReducer(avatarReducer, initialState);

  const baseUrl = "http://localhost:5000";

  // set avatar
  const setAvatar = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(`${baseUrl}/api/avatar`, formData, config);
      console.log(res);

      dispatch({
        type: SET_AVATAR,
        payload: res,
      });
    } catch (err) {
      dispatch({ type: SETAVATAR_FAIL, payload: err.response.data.message });
    }
  };

  // get avatar
  const getAvatar = () => {
    try {
      const res = axios.get(`${baseUrl}/api/avatar`).then((result) => {
        dispatch({
          type: GET_AVATAR,
          payload: result.data.imgUrl,
        });
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: SETAVATAR_FAIL, payload: error.response.data.message });
    }
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
