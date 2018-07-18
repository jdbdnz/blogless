import { fromJS } from "immutable";
import { createDuck } from "redux-duck";

import { getUser, hasUser } from "./selectors/user";
import setUserReducer from "./reducers/setUser";

export const JWT_COOKIE_NAME = "token-auth-jwt";

// DUCK
const { defineType, createAction, createReducer } = createDuck("posts");

// TYPES
export const SET_USER = defineType("SET_USER");

// ACTIONS
export const setUser = createAction(SET_USER);

// SELECTORS
export const selector = {
  getUser,
  hasUser
};

// REDUCER
export const initialState = fromJS({
  user: {}
});

export const reducer = createReducer(
  {
    [SET_USER]: setUserReducer
  },
  initialState
);

export default reducer;
