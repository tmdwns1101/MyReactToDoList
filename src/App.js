import React, { Component } from "react";
import { Home, SignUp } from "./pages/index";
import "antd/dist/antd.css";
import { Route, BrowserRouter } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
//import Login from "./components/Login";
import SignUpContainer from "./containers/SignUpContainer";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
      </BrowserRouter>
    );
  }
}

export default App;
