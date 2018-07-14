const post = ({ posts }, id) => {
  const post = posts.get("posts").find(p => `${p.get("id")}` === id);
  return post && post.toJS();
};

export default post;
