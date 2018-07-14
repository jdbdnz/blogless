import { fromJS } from "immutable";
import { createDuck } from "redux-duck";

import getPosts from "./selectors/posts";
import getPost from "./selectors/post";
import getFilter from "./selectors/filter";

import setPostsReducer from "./reducers/setPosts";
import setFilterReducer from "./reducers/setFilter";
import updatePostReducer from "./reducers/updatePost";

// DUCK
const { defineType, createAction, createReducer } = createDuck("posts");

// TYPES
export const SET_POSTS = defineType("SET_POSTS");
export const SET_FILTER = defineType("SET_FILTER");
export const UPDATE_POST = defineType("UPDATE_POST");

// ACTIONS
export const setPosts = createAction(SET_POSTS);
export const setFilter = createAction(SET_FILTER);
export const updatePost = createAction(UPDATE_POST);

// SELECTORS
export const selector = {
  getFilter,
  getPosts,
  getPost
};

// REDUCER
export const initialState = fromJS({
  filter: "",
  posts: []
});

export const reducer = createReducer(
  {
    [SET_POSTS]: setPostsReducer,
    [SET_FILTER]: setFilterReducer,
    [UPDATE_POST]: updatePostReducer
  },
  initialState
);

export default reducer;
