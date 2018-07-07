import React from "react";
import Date from "../Date";
import "./style.css";

const Presenter = ({ post }) => (
  <div className="Post">
    <Date date={post.updated_at} />
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </div>
);

export default Presenter;
