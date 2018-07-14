import { connect } from "react-redux";
import Posts from "./Presenter";
import { selector } from "../../ducks/posts";

const mapStateToProps = state => {
  return { posts: selector.getPosts(state) };
};

export default connect(mapStateToProps)(Posts);
