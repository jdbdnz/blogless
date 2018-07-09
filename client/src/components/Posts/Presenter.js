import React from "react";
import Post from "./Post";
import "./style.css";

const Presenter = ({ posts }) => (
  <div className="Posts">
    {posts.map(post => <Post key={post.id} post={post} />)}
  </div>
);

export default Presenter;
