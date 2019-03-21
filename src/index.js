import React from "react";
import ReactDOM from "react-dom";

import Upload from "./Upload";

import Login from "./Login";

import Signup from "./Signup";

import { Menu, Input, Header, Image, Search } from "semantic-ui-react";

const items = [
  { key: "editorials", active: true, name: "Editorials" },
  { key: "review", name: "Reviews" },
  { key: "events", name: "Upcoming Events" }
];

function App() {
  return (
    <div className="App">
      <Menu secondary>
        <Menu.Item name="Swachh Bharath" />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item name="logout" />
          <Menu.Item icon="bell" />
          <Menu.Item name="welcome Admin" icon="user circle"/>
        </Menu.Menu>
      </Menu>
      <Login />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
