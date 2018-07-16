import { fromJS } from "immutable";
const setCurrentUser = (state, { payload: currentUser }) => {
  return state.set("currentUser", fromJS(currentUser));
};

export default setCurrentUser;
