import { fromJS } from "immutable";
import { createDuck } from "redux-duck";

import getBlogs from "./selectors/blogs";
import getBlog from "./selectors/blog";

import setBlogsReducer from "./reducers/setBlogs";
import updateBlogReducer from "./reducers/updateBlog";

// DUCK
const { defineType, createAction, createReducer } = createDuck("blogs");

// TYPES
export const SET_BLOGS = defineType("SET_BLOGS");
export const UPDATE_BLOG = defineType("UPDATE_BLOG");

// ACTIONS
export const setBlogs = createAction(SET_BLOGS);
export const updateBlog = createAction(UPDATE_BLOG);

// SELECTORS
export const selector = {
  getBlogs,
  getBlog
};

// REDUCER
export const initialState = fromJS({
  blogs: []
});

export const reducer = createReducer(
  {
    [SET_BLOGS]: setBlogsReducer,
    [UPDATE_BLOG]: updateBlogReducer
  },
  initialState
);

export default reducer;
