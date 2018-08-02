import API from "./methods";

const get = () => API.get("/api/v1/blogs");
const patch = blog => API.patch(`/api/v1/blogs/${blog.id}`, { blog });

export default {
  get,
  patch
};
