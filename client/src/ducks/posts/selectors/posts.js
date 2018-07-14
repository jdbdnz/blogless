const posts = ({ posts }) => {
  const terms = posts
    .get("filter")
    .split(" ")
    .filter(x => x);
  if (terms.length) {
    const filteredPosts = posts.get("posts").filter(post => {
      const matchingTerms = terms.filter(term => {
        return (
          post.get("title").includes(term) || post.get("body").includes(term)
        );
      });
      return matchingTerms.length;
    });
    return filteredPosts.toJS();
  } else {
    return posts.get("posts").toJS();
  }
};

export default posts;
