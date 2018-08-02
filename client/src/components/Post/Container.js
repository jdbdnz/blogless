import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { merge, debounce } from "lodash";

import API from "../../api";
import Post from "./Presenter";
import NoPost from "./NoPost";
import { selector, updatePost } from "../../ducks/posts";

class PostContainer extends React.Component {
  onChange = attributes => {
    const mergeAttributes = merge(attributes, {
      id: this.props.post.id,
      persistingStatus: "pending"
    });
    const action = updatePost(mergeAttributes);
    this.props.dispatch(action);
  };

  patchToServer = debounce(() => {
    const id = this.props.post.id;
    const response = API.posts.patch(this.props.post).then(() => {
      if (!response.error) {
        const action = updatePost({
          id,
          persistingStatus: undefined
        });
        this.props.dispatch(action);
      }
    });
  }, 500);

  componentDidUpdate() {
    if (this.props.post.persistingStatus === "pending") {
      this.patchToServer();
    }
  }

  render() {
    return this.props.post ? (
      <Post post={this.props.post} onChange={this.onChange} />
    ) : (
      <NoPost />
    );
  }
}

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
