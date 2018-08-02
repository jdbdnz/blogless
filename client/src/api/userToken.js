import API from "./methods";

const create = ({ email, password }) => {
  const credentials = {
    auth: {
      email: email,
      password: password
    }
  };

  return API.post("/api/v1/user/token", credentials);
};

export default {
  create
};
