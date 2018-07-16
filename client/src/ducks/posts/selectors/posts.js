const postIncludesTerm = ({ post, term }) => {
  return ["title", "body"].some(attribute => {
    return post
      .get(attribute)
      .toLowerCase()
      .includes(term.toLowerCase());
  });
};

const filterPosts = ({ posts, terms }) => {
  return posts.filter(post => {
    return (
      terms.length ===
      terms.filter(term => postIncludesTerm({ post, term })).length
    );
  });
};

export default state => {
  const posts = state.posts.get("posts");
  const terms = state.posts
    .get("filter")
    .split(" ")
    .filter(x => x);

  if (terms.length) {
    return filterPosts({ posts, terms }).toJS();
  } else {
    return posts.toJS();
  }
};
