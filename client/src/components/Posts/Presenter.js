import React from "react";

import Post from "./Post";
import NoPosts from "./NoPosts";
import Header from "../Header";
import Filter from "./Filter";
import "./style.css";

const Presenter = props => (
  <div>
    <Header />
    {props.posts.length > 10 && <Filter />}
    <div className="Posts">
      {props.posts.length ? (
        props.posts.map(post => <Post key={post.id} post={post} />)
      ) : (
        <NoPosts />
      )}
    </div>
  </div>
);

export default Presenter;
