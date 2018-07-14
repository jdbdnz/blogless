import { fromJS } from "immutable";
import { merge } from "lodash";

const posts = (state = fromJS([]), action) => {
  switch (action.type) {
    case "ADD_POSTS":
      return state.merge(fromJS(action.posts));
    case "EDIT_POST":
      const postIndex = state.findIndex(
        post => `${post.get("id")}` === action.post.id
      );
      const oldPost = state.get(postIndex).toJS();
      const newPost = merge(oldPost, action.post);
      return state.set(postIndex, fromJS(newPost));
    default:
      return state;
  }
};

export default posts;
