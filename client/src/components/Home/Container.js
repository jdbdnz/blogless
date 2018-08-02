import React from "react";
import { connect } from "react-redux";
import { selector as userSelector } from "../../ducks/user";
import { selector as blogsSelector, setBlogs } from "../../ducks/blogs";

import API from "../../api";
import HomePresenter from "./Presenter";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { initializing: true };
  }

  componentDidMount() {
    if (this.props.blogs.length) {
      this.setState({ initializing: false });
    } else {
      this.getBlogs();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const getBlogsSuccess = prevProps.blogs.length !== this.props.blogs.length;
    getBlogsSuccess && this.setState({ initializing: false });
  }

  getBlogs = async () => {
    if (!window.localStorage.getItem("jwt")) return null;
    const response = await API.blogs.get();
    if (response.error) {
      // TODO: handle error
      this.setState({ initializing: false });
    } else {
      this.props.dispatch(setBlogs(response.data));
    }
  };

  render() {
    const { blogs, user, hasUser } = this.props;
    return <HomePresenter blogs={blogs} user={user} hasUser={hasUser} />;
  }
}

const mapStateToProps = state => {
  const user = userSelector.getUser(state);
  const hasUser = userSelector.hasUser(state);
  const blogs = blogsSelector.getBlogs(state);

  return {
    user,
    hasUser,
    blogs
  };
};

export default connect(mapStateToProps)(Home);
