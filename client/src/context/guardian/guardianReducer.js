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
  G_UPDATE_SUCCESS,
  G_UPDATE_FAIL,
  CLEAR_ERRORS,
} from "../types";

const guardianInfo = (state, action) => {
  // console.log("action: \n", action);
  // console.log("STATE: \n", state);
  switch (action.type) {
    case G_USER_LOADED:
      return {
        ...state,
        loading: false,
        guardianInfo: action.payload,
        error: null,
      };

    // case REGISTER_SUCCESS:
    // case LOGIN_SUCCESS:
    //   localStorage.setItem("token", action.payload.token);
    //   setAuthToken(action.payload.token);
    //   return {
    //     ...state,
    //     token: action.payload.token,
    //     isAuthenticated: true,
    //     loading: false,
    //   };

    case G_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case G_REGISTER_FAIL:
    case G_UPDATE_FAIL:
    case G_AUTH_ERROR:
      // case LOGIN_FAIL:
      // case LOGOUT:
      return {
        ...state,
        loading: false,
        guardianInfo: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default guardianInfo;
