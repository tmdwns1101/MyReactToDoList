import React, { Component } from "react";
import { Home } from "./pages/index";
import "antd/dist/antd.css";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;
