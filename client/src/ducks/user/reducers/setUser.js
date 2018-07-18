import { fromJS } from "immutable";
const setUser = (state, { payload: user }) => {
  return state.set("user", fromJS(user));
};

export default setUser;
