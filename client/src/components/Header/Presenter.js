import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import logo from "./logo.png";
import "./style.css";

const Presenter = () => {
  return (
    <header className="Header">
      <Link to="/">
        <div className="Header_blogName">My Blog</div>
      </Link>
      <Link to="/">
        <div className="Header_logo">Blogless</div>
      </Link>
      <Link to="/">
        <div className="Header_help">
          <Icon type="bars" />
        </div>
      </Link>
    </header>
  );
};

export default Presenter;
