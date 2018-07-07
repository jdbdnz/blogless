import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";

import Posts from "./components/Posts";
import Post from "./components/Post";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Posts} />
          <Route path="/posts/:id" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;
