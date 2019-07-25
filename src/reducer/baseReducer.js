import { ERRORS, LOADING } from "../types/baseTypes";

const init = {
  errors: [],
  loading: false,
  clear: false
};

export const baseReducer = (state = init, action) => {
  switch (action.type) {
    case ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state;
  }
};
