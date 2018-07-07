import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./style.css";

const Presenter = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img src={logo} className="Header_logo" alt="logo" />
      </Link>
    </header>
  );
};

export default Presenter;
