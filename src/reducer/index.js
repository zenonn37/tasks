import { combineReducers } from "redux";
import { baseReducer } from "./baseReducer";
import { authReducer } from "./authReducer";
import { categoryReducer } from "./categoryReducer";
import { projectReducer } from "./projectReducer";
import { taskReducer } from "./taskReducer";

export default combineReducers({
  base: baseReducer,
  auth: authReducer,
  category: categoryReducer,
  project: projectReducer,
  task: taskReducer
});
