import React, { Component } from "react";
import { connect } from "react-redux";

import API from "./api";
import AppRouter from "./components/AppRouter";
import Loading from "./components/Loading";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    API.posts.get(this.props.dispatch, () => this.setState({ loading: false }));
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? <Loading /> : <AppRouter />}
      </div>
    );
  }
}

export default connect()(App);
