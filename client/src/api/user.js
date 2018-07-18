import API from "./methods";

const get = jwt => {
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  };

  return API.get("/api/v1/user", config);
};

export default {
  get
};
