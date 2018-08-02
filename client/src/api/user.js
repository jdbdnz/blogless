import API from "./methods";

const get = () => API.get("/api/v1/user");
const post = user => API.post("/api/v1/user", user);

export default {
  get,
  post
};
