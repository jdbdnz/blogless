import { fromJS } from "immutable";

export default (state, { payload: user }) => {
  return state.set("user", fromJS(user));
};
