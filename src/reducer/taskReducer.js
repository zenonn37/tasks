import {
  GET_TASK,
  NEW_TASK,
  DELETE_TASK,
  UPDATE_TASK
} from "../types/taskTypes";
import { isInterfaceDeclaration } from "@babel/types";

const init = {
  tasks: [],
  current: null
};

export const taskReducer = (state = init, action) => {
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    case NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    default:
      return state;
  }
};
