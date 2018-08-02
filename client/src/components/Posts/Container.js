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
    const getPostsSuccess =
      this.props.posts && prevProps.posts.length !== this.props.posts.length;
    getPostsSuccess && this.setState({ initializing: false });
  }

  getPosts = async () => {
    const response = await API.posts.get(this.props.match.params.blog_id);

    if (response.error) {
      // TODO: handle error
      this.setState({ initializing: false });
    } else {
      this.props.dispatch(setPosts(response.data));
    }
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
