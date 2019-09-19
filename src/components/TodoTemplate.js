import React from "react";
import "./TodoStyle.scss";

function TodoTemplate({ children }) {
  return <div className="container">{children}</div>;
}

export default TodoTemplate;
