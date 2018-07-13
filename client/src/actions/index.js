import { fromJS } from "immutable";

export const addPosts = posts => ({
  type: "ADD_POSTS",
  posts: fromJS(posts)
});

export const setPostFilter = filter => ({
  type: "SET_POST_FILTER",
  filter
});
