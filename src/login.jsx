import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    if (this.props.isAuthenticated === true) {
      return <Redirect to="/empolyees" />;
    } else {
      return (
        <div>
          <h1>Login Pge</h1>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <br />
          <button onClick={() => this.props.handleLogin(email, password)}>
            Login
          </button>
        </div>
      );
    }
  }
}

export default Login;
