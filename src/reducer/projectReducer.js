import {
  GET_PROJECTS,
  NEW_PROJECTS,
  DELETE_PROJECTS,
  UPDATE_PROJECTS
} from "../types/taskTypes";

const init = {
  projects: [],
  current: null
};

export const projectReducer = (state = init, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        tasks: action.payload
      };
    case NEW_PROJECTS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case UPDATE_PROJECTS:
      return {
        ...state,
        tasks: action.payload
      };
    case DELETE_PROJECTS:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    default:
      return state;
  }
};
