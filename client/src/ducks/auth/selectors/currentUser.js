export const getCurrentUser = ({ auth }) => auth.get("currentUser").toJS();
export const hasCurrentUser = ({ auth }) => !auth.get("currentUser").isEmpty();
export default { getCurrentUser, hasCurrentUser };
