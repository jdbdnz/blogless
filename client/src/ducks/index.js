import { combineReducers } from "redux";
import posts from "./posts";
import user from "./user";

const reducer = combineReducers({
  posts,
  user
});

export default reducer;
