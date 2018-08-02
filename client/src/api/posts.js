import API from "./methods";

const get = blog_id => API.get(`/api/v1/posts?blog_id=${blog_id}`);
const patch = post => API.patch(`/api/v1/posts/${post.id}`, { post });

export default {
  get,
  patch
};
