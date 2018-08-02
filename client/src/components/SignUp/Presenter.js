import React from "react";
import { Input, Button } from "antd";

import "./style.css";

const Presenter = props => (
  <div className="SignUp">
    <div className="SignUp__form">
      <h2>Sign up</h2>
      <Input type="email" placeholder="Email" onChange={props.onChangeEmail} />
      <Input
        type="password"
        placeholder="Password"
        onChange={props.onChangePassword}
      />
      <Button type="primary" onClick={props.submit}>
        Sign up
      </Button>
      {props.error && <span>{props.error}</span>}
    </div>
  </div>
);

export default Presenter;
