import {
  GET_PROJECTS,
  NEW_PROJECTS,
  DELETE_PROJECTS,
  UPDATE_PROJECTS
} from "../types/taskTypes";

const init = {
  projects: [],
  current: {}
};

export const projectReducer = (state = init, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        current: action.payload
      };
    case NEW_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case UPDATE_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case DELETE_PROJECTS:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload)
      };

    default:
      return state;
  }
};
