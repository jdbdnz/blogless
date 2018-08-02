import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Presenter = ({ blog }) => (
  <div className="Blogs-Blog">
    <Link to={`/${blog.id}/posts/`} className="Blogs-Blog_name">
      {blog.name}
    </Link>
  </div>
);

export default Presenter;
