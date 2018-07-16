import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { withCookies, Cookies } from "react-cookie";
import PropTypes from "prop-types";

import API from "./api";
import { selector, setCurrentUser, JWT_COOKIE_NAME } from "./ducks/auth";

import Loading from "./components/Loading";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Posts from "./components/Posts";
import Post from "./components/Post";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { initializing: true };
  }

  componentDidMount() {
    const jwt = this.props.cookies.get(JWT_COOKIE_NAME);
    if (jwt) {
      // Triggers get user sequence
      this.setState({ jwt });
    } else {
      // Shows login
      this.setState({ initializing: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const hasNewJwt = this.state.jwt && prevState.jwt !== this.state.jwt;
    hasNewJwt && this.getUser();

    const loginSuccess =
      this.props.currentUser &&
      prevProps.currentUser !== this.props.currentUser;
    loginSuccess && this.setState({ initializing: false });
  }

  getUser = async () => {
    const response = await API.session.getCurrentUser(this.state.jwt);
    const badJwt = response === undefined;

    if (badJwt) {
      this.props.cookies.remove(JWT_COOKIE_NAME);
      this.setState({ initializing: false });
    } else {
      this.props.dispatch(setCurrentUser(response));
    }
  };

  onAuthSuccess = jwt => {
    this.props.cookies.set(JWT_COOKIE_NAME, jwt, { path: "/" });
    this.setState({ jwt });
  };

  signOut = () => {};

  render() {
    if (this.state.initializing) {
      return <Loading />;
    }

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" component={Home} />
            {this.props.hasCurrentUser && (
              <Route exact path="/posts/:id" component={Post} />
            )}
            {this.props.hasCurrentUser && (
              <Route exact path="/posts" component={Posts} />
            )}
            <Route
              exact
              path="/sign-in"
              render={routeProps => (
                <SignIn {...routeProps} onSuccess={this.onAuthSuccess} />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired
};

const mapStateToProps = state => {
  const currentUser = selector.getCurrentUser(state);
  const hasCurrentUser = selector.hasCurrentUser(state);

  return {
    currentUser,
    hasCurrentUser
  };
};

export default connect(mapStateToProps)(withCookies(App));
