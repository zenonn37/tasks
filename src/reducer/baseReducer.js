import { ERRORS, LOADING, COMPLETE } from "../types/baseTypes";

const init = {
  errors: [],
  loading: false,
  clear: false,
  complete: true,
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
    case COMPLETE:
      return {
        ...state,
        complete: action.payload
      }

    default:
      return state;
  }
};
