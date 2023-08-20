import React, { Component } from "react";
import User from "./UserItem";

const A = 0;

class Users extends Component {
  componentDidUpdate() {
    if (A === 0) {
      throw new Error("CODE ZERO I repeat Code 0..!");
    }
  }

  render() {
    return (
      <div className="App">
        {this.props.users.map((u) => {
          return <User key={this.props.users.id}>{u.name}</User>;
        })}
      </div>
    );
  }
}

export default Users;
