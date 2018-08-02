import { fromJS } from "immutable";

const updateBlog = (state, { payload: blog }) => {
  const blogIndex = state.get("blogs").findIndex(p => p.get("id") === blog.id);
  const oldBlog = state.getIn(["blogs", blogIndex]);
  const newBlog = oldBlog.merge(fromJS(blog));
  return state.setIn(["blogs", blogIndex], newBlog);
};

export default updateBlog;
