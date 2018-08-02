export default ({ blogs }, id) => {
  const blog = blogs.get("blogs").find(b => `${b.get("id")}` === id);
  return blog && blog.toJS();
};
