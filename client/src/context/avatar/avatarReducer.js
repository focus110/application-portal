import {
  SET_AVATAR,
  GET_AVATAR,
  REMOVE_AVATAR,
  SETAVATAR_FAIL,
} from "../types";

const avatar = (state, action) => {
  switch (action.type) {
    case SET_AVATAR:
      return {
        ...state,
        payload: action.payload,
      };
    case GET_AVATAR:
      return {
        ...state,
        imgUrl: action.payload,
      };
    case REMOVE_AVATAR:
      return;
    case SETAVATAR_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default avatar;
