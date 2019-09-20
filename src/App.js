import React from "react";
import { Home } from "./pages/index";
import "antd/dist/antd.css";
import { Route } from "react-router-dom";

function App() {
  return <Route path="/" exact component={Home} />;
}

export default App;
