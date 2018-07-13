import { connect } from "react-redux";
import Posts from "./Presenter";

const filterPosts = (posts, filter) => {
  const terms = filter.split(" ").filter(x => x);
  if (terms.length) {
    const filteredPosts = posts.filter(post => {
      const matchingTerms = terms.filter(term => {
        return post.title.includes(term) || post.body.includes(term);
      });
      return matchingTerms.length;
    });
    return filteredPosts;
  } else {
    return posts;
  }
};

const mapStateToProps = state => ({
  posts: filterPosts(state.posts.toJS(), state.postFilter)
});

export default connect(mapStateToProps)(Posts);
