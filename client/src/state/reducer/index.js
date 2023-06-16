import { combineReducers } from "redux";
import user from "./user.js";
import post from "./post.js";

const reducers = combineReducers({
  user,
  post,
});

export default reducers;
