import { fromJS } from "immutable";

const setPosts = (state, { payload: posts }) => {
  return state.set("posts", fromJS(posts));
};

export default setPosts;
