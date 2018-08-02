import React from "react";
import { connect } from "react-redux";
import PostsPresenter from "./Presenter";
import { selector, setPosts } from "../../ducks/posts";
import API from "../../api";
import Loading from "../Loading";

export class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { initializing: true };
  }

  componentDidMount() {
    if (this.props.posts.length) {
      this.setState({ initializing: false });
    } else {
      this.getPosts();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const getPostsSuccess = prevProps.posts.length !== this.props.posts.length;
    getPostsSuccess && this.setState({ initializing: false });
  }

  getPosts = () => {
    API.posts
      .get(this.props.match.params.blog_id)
      .then(response => {
        if (response.length) {
          this.props.dispatch(setPosts(response));
        } else {
          this.setState({ initializing: false });
        }
      })
      .catch(error => {
        // TODO: handle error
        this.setState({ initializing: false });
      });
  };

  render() {
    return this.state.initializing ? (
      <Loading />
    ) : (
      <PostsPresenter posts={this.props.posts} />
    );
  }
}

const mapStateToProps = (state, props) => {
  return { posts: selector.getPosts(state, props.match.params.blog_id) };
};

export default connect(mapStateToProps)(Posts);
