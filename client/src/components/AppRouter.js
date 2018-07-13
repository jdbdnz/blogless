import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Posts from "./Posts";
import Post from "./Post";

const AppRouter = () => (
  <Router>
    <div>
      <div className="container">
        <Route path="/posts/:id" component={Post} />
        <Route exact path="/" component={Posts} />
      </div>
    </div>
  </Router>
);

export default AppRouter;
