import { combineReducers } from "redux";
import todolist from "./todolist";
import login from "./login";
import signup from "./signup";
export default combineReducers({
  todolist,
  login,
  signup
});
