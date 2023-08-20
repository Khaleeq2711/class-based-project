import React, { Component } from "react";

class User extends Component {

    componentWillUnmount(){
        console.log('comonent is Unmounted..');
    }
  render() {
    return <h2>{this.props.children}</h2>;
  }
}

// function User(props) {
//   return <h2>{props.children}</h2>;
// }

export default User;
