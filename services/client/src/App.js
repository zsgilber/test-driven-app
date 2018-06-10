import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import usersApi from './api/usersApi';

class App extends Component {

  componentDidMount() {
    usersApi.getUsers();
}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <br />
            <h1>All Users</h1>
            <hr />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
