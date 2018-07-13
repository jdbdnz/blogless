import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Post from "./Presenter";
import NoPost from "./NoPost";

const PostContainer = props => {
  const postId = props.match.params.id;
  const post = props.posts.find(p => `${p.id}` === postId);
  return post ? <Post post={post} /> : <NoPost />;
};

PostContainer.propTypes = {
  posts: PropTypes.array.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.toJS()
});

export default connect(mapStateToProps)(PostContainer);
