import { fromJS } from "immutable";

const posts = (state = fromJS([]), action) => {
  switch (action.type) {
    case "ADD_POSTS":
      return state.merge(action.posts);
    default:
      return state;
  }
};

export default posts;
