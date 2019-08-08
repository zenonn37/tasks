import { REGISTER, LOGIN, LOGOUT } from "../types/authTypes";

const init = {
  token: localStorage.getItem("access_token") || null,
  user: null
};

export const authReducer = (state = init, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state
      };
    case LOGIN:
      return {
        ...state,
        token: action.payload
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null
      };

    default:
      return state;
  }
};
