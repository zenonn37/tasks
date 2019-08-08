import { REGISTER, LOGIN, LOGOUT, AUTH } from "../types/authTypes";

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
    case AUTH:
      return {
        ...state,
        user: action.payload
      }

    default:
      return state;
  }
};
