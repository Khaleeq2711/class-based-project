import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";

import "./App.css";
import UserFinder from "./Components/UserFinder";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showUser: false,
      userName: "Maxine",
    };
  }

  toggleUserName() {
    this.setState({
      userName: "Maxine Lux",
    });
    //In useState, overwrite old state with new..
    //In Class-bbased States, Merge states..
  }
  toggleUser() {
    console.log(this.state.showUser);
    this.setState({
      showUser: !this.state.showUser,
    });
    //In useState, overwrite old state with new..
    //In Class-bbased States, Merge states..
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleUser.bind(this)}>
          {this.state.showUser ? "Hide Users" : "Show Users"}{" "}
        </button>
        {this.state.showUser && <UserFinder />}
      </div>
    );
  }
}

export default App;

//Class based components can not use Hooks
//Instead of useEffect, it have Components Lifecycle Methods
//componentDidMount();       when render      like....[] in useEffect
//componentDidUpdate();      when re-render   like...[dependency]
//componentWilldUnmount();   when removing    like clean-up
