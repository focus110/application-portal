import React, { useReducer } from "react";
import AvatarContext from "./avatarContext";
import avatarReducer from "./avatarReducer";
import {
  SET_AVATAR,
  GET_AVATAR,
  REMOVE_AVATAR,
  SETAVATAR_FAIL,
  CLEAR_ERRORS,
} from "../types";
import avatar from "../../img/avatar.jpg";
import axios from "axios";

const AvatarState = (props) => {
  const initialState = {
    imgUrl: "",
    error: "",
    loading: true,
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

      dispatch({
        type: SET_AVATAR,
        payload: res.data,
      });
    } catch (err) {
      console.log("set avatar", err);
      dispatch({ type: SETAVATAR_FAIL, payload: err.response.data.error });
    }
  };

  // get avatar
  const getAvatar = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/avatar`);
      dispatch({
        type: GET_AVATAR,
        payload: res.data.imgUrl,
      });
    } catch (error) {
      console.log("get avatar", error);
      dispatch({ type: SETAVATAR_FAIL, payload: error.response.data.message });
    }
  };

  // remove avatar
  const removeAvatar = (id) => {
    dispatch({ type: REMOVE_AVATAR, payload: id });
  };

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AvatarContext.Provider
      value={{
        avaUrl: state.imgUrl,
        error: state.error,
        loading: state.loading,
        setAvatar,
        getAvatar,
        removeAvatar,
        clearErrors,
      }}
    >
      {props.children}
    </AvatarContext.Provider>
  );
};

export default AvatarState;
