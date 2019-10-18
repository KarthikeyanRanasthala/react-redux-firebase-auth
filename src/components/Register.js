import React from "react";
import { connect } from "react-redux";

import { register } from "../Redux/actions";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.register(this.state.email, this.state.password);
  };

  render() {
    return (
      <>
        <h1>Register</h1>
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
    register: (email, password) => dispatch(register(email, password))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
