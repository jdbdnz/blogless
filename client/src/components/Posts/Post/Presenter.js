import React from "react";
import { Link } from "react-router-dom";

import Date from "../../Date";
import "./style.css";

const Presenter = ({ post }) => (
  <div className="Posts-Post">
    <Date date={post.updated_at} />
    <Link to={`/posts/${post.id}`}>{post.title}</Link>
  </div>
);

export default Presenter;
