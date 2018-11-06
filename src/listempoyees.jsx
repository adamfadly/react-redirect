import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class ListEMployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/employees`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(res => {
        if (res.data.data) {
          this.setState({
            employees: res.data.data
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.props.isAuthenticated === false) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <h1>List Of Employees</h1>
          {this.state.employees.map((employee, index) => (
            <ul key={index}>
              <li>Employee Number :{employee.emp_no}</li>
              <li>
                Birth Of Date:
                {employee.birth_date}
              </li>
              <li>First Name : {employee.first_name}</li>
              <li>Last Name: {employee.last_name}</li>
              <li>
                Gender:
                {employee.gender}
              </li>
              <li>
                Hired Date
                {employee.hire_date}
              </li>
              <hr />
            </ul>
          ))}
        </div>
      );
    }
  }
}

export default ListEMployees;
