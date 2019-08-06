import React, { Component } from "react";
import Deputy from "../img/deputy.png";

class GetMe extends Component {
  state = { users: [] };

  render() {
    return (
      <div className="App">
        <h1>sign in to deputy</h1>
        <a href={"http://localhost:5000/auth/example"}>
          <img src={Deputy} alt="sad..." />
        </a>
      </div>
    );
  }
}
export default GetMe;
