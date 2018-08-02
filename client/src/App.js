import React, { Component } from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import API from "./api";
import { selector, setUser } from "./ducks/user";

import Loading from "./components/Loading";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Posts from "./components/Posts";
import Post from "./components/Post";

const publicRoutes = ["/", "/sign-in", "/sign-up"];

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { initializing: true };
  }

  componentDidMount() {
    if (this.props.hasUser) {
      this.setState({ initializing: false });
    } else {
      // TODO: store jwt in httpOnly cookie to avoid xss vulnerability
      const jwt = window.localStorage.getItem("jwt");
      if (jwt) {
        this.getUser();
      } else {
        this.setState({ initializing: false });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const loginSuccess = this.props.user && prevProps.user !== this.props.user;
    loginSuccess && this.setState({ initializing: false });
  }

  getUser = async () => {
    try {
      const response = await API.user.get();
      this.props.dispatch(setUser(response));
    } catch (e) {
      window.localStorage.removeItem("jwt");
      this.setState({ initializing: false });
    }
  };

  onAuthSuccess = jwt => {
    window.localStorage.setItem("jwt", jwt);
    this.getUser();
  };

  render() {
    if (this.state.initializing) {
      return <Loading />;
    }

    const redirectToSignIn =
      !this.props.hasUser &&
      publicRoutes.indexOf(window.location.pathname) === -1;

    return (
      <Router>
        <div className="App">
          <div className="container">
            {redirectToSignIn && <Redirect to="/sign-in" />}
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/:blog_id/posts" component={Posts} />
            <Route
              exact
              path="/sign-in"
              render={routeProps => (
                <SignIn {...routeProps} onSuccess={this.onAuthSuccess} />
              )}
            />
            <Route
              exact
              path="/sign-up"
              render={routeProps => (
                <SignUp {...routeProps} onSuccess={this.onAuthSuccess} />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const user = selector.getUser(state);
  const hasUser = selector.hasUser(state);

  return {
    user,
    hasUser
  };
};

export default connect(mapStateToProps)(App);
