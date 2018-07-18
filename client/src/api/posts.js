import API from "./methods";

const get = blog => {
  return API.get("/api/v1/posts", { blog_id: blog.id });
};

const patch = post => {
  return API.patch(`/api/v1/posts/${post.id}.json`, { post });
};

export default {
  get,
  patch
};
