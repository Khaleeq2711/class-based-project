import { Component } from "react";
import ErrorBoundary from "../ErrorBoundary";

import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Tess" },
  { id: "u3", name: "Julie" },
  { id: "u4", name: "Maxine" },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchUser: "",
    };
  }

  searchChangeHandler(e) {
    this.setState({
      searchUser: e.target.value,
    });
    //In useState, overwrite old state with new..
    //In Class-bbased States, Merge states..
  }

  componentDidMount() {
    //Send Http req
    this.setState({
      filteredUsers: DUMMY_USERS,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchUser !== this.state.searchUser) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchUser)
        ),
      });
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <>
        <div>
          Search{" "}
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary users={this.state.filteredUsers}>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </>
    );
  }
}

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchUser))
//     );
//   }, [searchUser]);

export default UserFinder;
