import { fromJS } from "immutable";

const updatePost = (state, { payload: post }) => {
  const postIndex = state
    .get("posts")
    .findIndex(p => `${p.get("id")}` === post.id);
  const oldPost = state.getIn(["posts", postIndex]);
  const newPost = oldPost.merge(fromJS(post));
  return state.setIn(["posts", postIndex], newPost);
};

export default updatePost;
