import { fromJS } from "immutable";
import { createDuck } from "redux-duck";

import { getCurrentUser, hasCurrentUser } from "./selectors/currentUser";
import setCurrentUserReducer from "./reducers/setCurrentUser";

export const JWT_COOKIE_NAME = "token-auth-jwt";

// DUCK
const { defineType, createAction, createReducer } = createDuck("posts");

// TYPES
export const SET_CURRENT_USER = defineType("SET_CURRENT_USER");

// ACTIONS
export const setCurrentUser = createAction(SET_CURRENT_USER);

// SELECTORS
export const selector = {
  getCurrentUser,
  hasCurrentUser
};

// REDUCER
export const initialState = fromJS({
  currentUser: {}
});

export const reducer = createReducer(
  {
    [SET_CURRENT_USER]: setCurrentUserReducer
  },
  initialState
);

export default reducer;
