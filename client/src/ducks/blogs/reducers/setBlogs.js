import { fromJS } from "immutable";

const setBlogs = (state, { payload: blogs }) => {
  return state.set("blogs", fromJS(blogs));
};

export default setBlogs;
