import { SET_AVATAR, GET_AVATAR, REMOVE_AVATAR } from "../types";

const avatar = (state, action) => {
  switch (action.type) {
    case SET_AVATAR:
      return;
    case GET_AVATAR:
      return;
    case REMOVE_AVATAR:
      return;
    default:
      return state;
  }
};

export default avatar;
