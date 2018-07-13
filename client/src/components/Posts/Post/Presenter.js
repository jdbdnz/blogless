import React from "react";
import { Link } from "react-router-dom";
import PostMeta from "./Meta";

import "./style.css";

const Presenter = ({ post }) => (
  <div className="Posts-Post">
    <PostMeta date={post.published_at} />
    <Link to={`/posts/${post.id}`} className="Posts-Post_title">
      {post.title}
    </Link>
  </div>
);

export default Presenter;
