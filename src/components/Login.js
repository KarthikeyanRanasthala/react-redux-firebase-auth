import React from "react";

import { login } from "../Redux/actions";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            name="email"
            onChange={event => this.handleChange(event)}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            onChange={event => this.handleChange(event)}
            placeholder="password"
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
