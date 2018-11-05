import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import ListEmployees from "./listempoyees";
import Login from "./login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
  }
  render() {
    return (
      <Router>
        <div>
          <div className="navigation-bar">
            <div>
              <Link to="/">Home</Link> | <Link to="employees">Employees</Link>
            </div>
            <Link to="/login">Login</Link>
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
        </div>
      </Router>
    );
  }
}

export default App;
