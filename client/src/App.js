import React, { Component } from "react";
import { connect } from "react-redux";

import AppRouter from "./components/AppRouter";
import API from "./api";

export class App extends Component {
  componentDidMount() {
    API.posts.get(this.props.dispatch);
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
