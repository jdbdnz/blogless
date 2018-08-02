import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import SignUpPresenter from "./Presenter";
import API from "../../api";
import { selector } from "../../ducks/user";
import { modelErrorsToString } from "../../utils/errorHandling";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: undefined
    };
  }

  attemptSignup = credentials => {
    API.user
      .post({
        user: {
          email: this.state.email,
          password: this.state.password
        }
      })
      .then(result => {
        const { jwt, error } = result;
        if (jwt) {
          this.props.onSuccess(jwt);
        } else {
          this.setState({ error: error.message });
        }
      })
      .catch(error => {
        this.setState({ error: modelErrorsToString(error) });
      });
  };

  render() {
    if (this.props.hasUser) {
      return <Redirect to="/" />;
    }

    return (
      <SignUpPresenter
        error={this.state.error}
        onChangeEmail={e => this.setState({ email: e.target.value })}
        onChangePassword={e => this.setState({ password: e.target.value })}
        submit={this.attemptSignup}
      />
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

export default connect(mapStateToProps)(SignUp);
