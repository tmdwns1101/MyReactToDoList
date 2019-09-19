import React from "react";
import "./TodoStyle.scss";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div className="list-container">
      <TodoItem id={1} done text={"UI 만들기"} />
      <TodoItem id={2} text={"store 만들기"} />
      <TodoItem id={3} text={"백엔드 만들기"} />
      <TodoItem id={3} text={"백엔드 만들기"} />
      <TodoItem id={3} text={"백엔드 만들기"} />
      <TodoItem id={3} text={"백엔드 만들기"} />
      <TodoItem id={3} text={"백엔드 만들기"} />
      <TodoItem id={3} text={"백엔드 만들기"} />
      <TodoItem id={3} text={"백엔드 만들기"} />
      <TodoItem id={3} text={"백엔드 만들기"} />
    </div>
  );
}

export default TodoList;
