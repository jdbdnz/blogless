import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { merge } from "lodash";

import Post from "./Presenter";
import NoPost from "./NoPost";
import { selector, updatePost } from "../../ducks/posts";

const PostContainer = props => {
  const id = props.match.params.id;
  return props.post ? (
    <Post
      post={props.post}
      onChange={attributes => {
        const action = updatePost(merge(attributes, { id }));
        props.dispatch(action);
      }}
    />
  ) : (
    <NoPost />
  );
};

PostContainer.propTypes = {
  post: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = (state, props) => {
  const post = selector.getPost(state, props.match.params.id);
  return { post };
};

export default connect(mapStateToProps)(PostContainer);
