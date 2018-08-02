import React from "react";
import { Link } from "react-router-dom";

import Blog from "./Blog";

const Home = props => {
  const blogs =
    props.blogs && props.blogs.map(blog => <Blog key={blog.id} blog={blog} />);
  return (
    <div>
      <h1>Welcome to Blogless</h1>
      {props.hasUser ? (
        blogs
      ) : (
        <div>
          <Link to="/sign-in" className="ant-btn ant-btn-default">
            Sign in
          </Link>
          <Link to="/sign-up" className="ant-btn ant-btn-primary">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
