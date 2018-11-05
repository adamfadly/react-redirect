import React, { Component } from "react";

class ListEMployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employess: []
    };
  }
  render() {
    return (
      <div>
        <h1>List Of Employees</h1>
      </div>
    );
  }
}

export default ListEMployees;
