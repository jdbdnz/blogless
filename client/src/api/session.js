import axios from "axios";

const authenticateUser = ({ email, password }) => {
  const data = {
    auth: {
      email: email,
      password: password
    }
  };
  return axios
    .post("/api/v1/user/token", data)
    .then(response => {
      return response.data;
    })
    .catch(function(error) {
      return { error };
    });
};

const getCurrentUser = jwt => {
  const config = {
    headers: {}
  };
  if (jwt) {
    config["headers"]["Authorization"] = "Bearer " + jwt;
  }
  return axios
    .get("/api/v1/users/current", config)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return undefined;
    });
};

export default {
  authenticateUser,
  getCurrentUser
};
