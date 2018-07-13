import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { addPosts } from "./actions";
import AppRouter from "./components/AppRouter";

export class App extends Component {
  componentDidMount() {
    axios
      .get("/api/v1/posts.json")
      .then(response => {
        this.props.dispatch(addPosts(response.data));
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default connect()(App);
