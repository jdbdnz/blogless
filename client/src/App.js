import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Posts from "./components/Posts";
import Post from "./components/Post";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={Posts} />
            <Route path="/posts/:id" component={Post} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
