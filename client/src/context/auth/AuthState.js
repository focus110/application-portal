import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  const baseUrl = "http://localhost:5000";

  // Load User
  // const loadUser = async () => {
  //   // load token into global header
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }

  //   try {
  //     const res = await axios.get(`${baseUrl}api/auth`);

  //     dispatch({
  //       type: USER_LOADED,
  //       payload: res.data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: AUTH_ERROR,
  //       payload: err,
  //     });
  //   }
  // };

  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `http://localhost:5000/api/users`,
        formData,
        config
      );
      console.log(res);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data.data });

      // loadUser();
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.message });
    }
  };

  // Login User
  // const login = async (formData) => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const res = await axios.post(`${baseUrl}api/auth`, formData, config);

  //     dispatch({ type: LOGIN_SUCCESS, payload: res.data });

  //     loadUser();
  //   } catch (err) {
  //     dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
  //   }
  // };

  // Logout
  // const logOut = () => dispatch({ type: LOGOUT, payload: null });

  // Clear Errors
  // const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;