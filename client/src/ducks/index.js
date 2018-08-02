import { combineReducers } from "redux";
import blogs from "./blogs";
import posts from "./posts";
import user from "./user";

const reducer = combineReducers({
  blogs,
  posts,
  user
});

export default reducer;
