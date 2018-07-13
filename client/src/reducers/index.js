import { combineReducers } from "redux";
import posts from "./posts";
import postFilter from "./postFilter";

export default combineReducers({
  posts,
  postFilter
});
