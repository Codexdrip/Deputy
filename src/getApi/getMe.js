import React, { Component } from "react";

class GetMe extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/deputy")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user => (
          <div key={user.Login}>{user.Name}</div>
        ))}
      </div>
    );
  }
}
export default GetMe;
