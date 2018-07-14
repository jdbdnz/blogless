export const editPost = post => ({
  type: "EDIT_POST",
  post
});

export const addPosts = posts => ({
  type: "ADD_POSTS",
  posts
});

export const setPostFilter = filter => ({
  type: "SET_POST_FILTER",
  filter
});
