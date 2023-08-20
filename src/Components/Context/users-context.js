import React from 'react';

const UsersContext = React.createContext({
  users: [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Tess" },
    { id: "u3", name: "Julie" },
    { id: "u4", name: "Maxine" }
  ]
});

export default UsersContext;

//use Context.provider   &  Context.consumer...