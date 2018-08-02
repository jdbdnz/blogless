export const getUser = ({ user }) => user.get("user").toJS();
export const hasUser = ({ user }) => !user.get("user").isEmpty();

export default { getUser, hasUser };
