import React, { Component } from "react";
import User from "./Components/UserItem";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <p>"CODE ZERO I repeat Code 0..!"</p>
          <div className="App">
            {this.props.users.map((u) => {
              return <User key={this.props.users.id}>{u.name}</User>;
            })}
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

// function User(props) {
//   return <h2>{props.children}</h2>;
// }

export default ErrorBoundary;
