import React from "react";

import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
