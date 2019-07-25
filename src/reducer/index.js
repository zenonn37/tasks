import { combineReducers } from "redux";
import { baseReducer } from "./baseReducer";
import { authReducer } from "./authReducer";

import { projectReducer } from "./projectReducer";
import { taskReducer } from "./taskReducer";

export default combineReducers({
  base: baseReducer,
  auth: authReducer,

  project: projectReducer,
  task: taskReducer
});
