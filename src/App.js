import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import ListEmployees from "./listempoyees";
import Login from "./login";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
  }

  handleLogin = (email, password) => {
    console.log("test");
    axios
      .post(`${process.env.REACT_APP_API_URL}/accounts/login`, {
        email: email,
        password: password
      })
      .then(res => {
        if (res.data.token) {
          this.setState({
            isAuthenticated: true
          });
          localStorage.token = res.data.token;
        }
      })
      .catch(err => console.log(err));
  };

  handleLogout = () => {
    this.setState({ isAunthentic: false });
    localStorage.removeItem("token");
  };

  render() {
    return (
      <Router>
        <div>
          <div className="navigation-bar">
            <div>
              <Link to="/">Home</Link> | <Link to="employees">Employees</Link>
            </div>
            {this.state.isAuthenticated ? (
              <div>
                Welcome Boss
                <button onClick={this.handleLogout}>Logout</button>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>

          <hr />
          <Route exact path="/" component={Home} />
          <Route
            path="/employees"
            render={props => (
              <ListEmployees
                isAuthenticated={this.state.isAuthenticated}
                {...props}
              />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <Login
                isAuthenticated={this.state.isAuthenticated}
                handleLogin={this.handleLogin}
                {...props}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
