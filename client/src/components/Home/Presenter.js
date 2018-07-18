import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      <h1>Welcome to Blogless</h1>
      {props.hasUser ? (
        <Link to="/posts">Posts</Link>
      ) : (
        <Link to="/sign-in">Sign in</Link>
      )}
    </div>
  );
};

export default Home;
