import React, { useReducer } from "react";
import GuardianContext from "./guardianContext";
import guardianReducer from "./guardianReducer";
import axios from "axios";

import {
  G_REGISTER_SUCCESS,
  G_REGISTER_FAIL,
  G_USER_LOADED,
  G_AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  G_UPDATE_SUCCESS,
  G_UPDATE_FAIL,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    loading: true,
    guardianInfo: null,
    error: null,
  };

  const [state, dispatch] = useReducer(guardianReducer, initialState);

  const baseUrl = "http://localhost:5000";

  // Load guardianInfo
  const loadGuardianInfo = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/guardianInfo`);
      dispatch({
        type: G_USER_LOADED,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: G_AUTH_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  // register guardianInfo
  const registerGuardianInfo = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `${baseUrl}/api/guardianInfo`,
        formData,
        config
      );
      dispatch({
        type: G_REGISTER_SUCCESS,
        payload: res,
      });
    } catch (err) {
      dispatch({ type: G_REGISTER_FAIL, payload: err.response.data.message });
    }
  };

  // Update guardianInfo
  const updateGuardianInfo = async (payload) => {
    console.log(payload);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `${baseUrl}/api/guardianInfo`,
        payload,
        config
      );

      console.log(res);
      dispatch({
        type: G_UPDATE_SUCCESS,
        payload: res,
      });
    } catch (err) {
      // console.log(err);
      dispatch({ type: G_UPDATE_FAIL, payload: err.response.data.message });
    }
  };

  // Delete guardianInfo

  return (
    <GuardianContext.Provider
      value={{
        guardianInfo: state.guardianInfo,
        error: state.error,
        loading: state.loading,
        registerGuardianInfo,
        updateGuardianInfo,
        loadGuardianInfo,
      }}
    >
      {props.children}
    </GuardianContext.Provider>
  );
};

export default AuthState;
