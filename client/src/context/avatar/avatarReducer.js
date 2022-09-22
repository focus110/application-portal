import {
  SET_AVATAR,
  GET_AVATAR,
  REMOVE_AVATAR,
  SETAVATAR_FAIL,
  CLEAR_ERRORS,
} from "../types";

const avatar = (state, action) => {
  // console.log("action: \n", action);
  // console.log("STATE: \n", state);
  switch (action.type) {
    case SET_AVATAR:
      return {
        ...state,
        loading: false,
      };
    case GET_AVATAR:
      return {
        ...state,
        imgUrl: action.payload,
        loading: false,
      };
    case REMOVE_AVATAR:
      return;
    case SETAVATAR_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default avatar;
