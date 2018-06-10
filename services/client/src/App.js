import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import usersApi from "./api/usersApi";
import UsersList from './components/UsersList';

//test_data =

class App extends Component {
    state = {
    users: []
  };
  componentDidMount() {
    usersApi.getUsers().then(users => {
      this.setState({users: users})
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <br />
            <h1>All Users</h1>
            <hr />
            <br />
            { <UsersList users={this.state.users}/> }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
