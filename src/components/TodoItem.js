import React from "react";
import "./TodoStyle.scss";
import { MdDone, MdDelete } from "react-icons/md";

function TodoItem({ id, done, text }) {
  const selected = done ? "done" : "";
  return (
    <div className="todo-item">
      <div className={`check-circle ${selected}`}>{done && <MdDone />}</div>
      <div className={`text ${selected}`}>{text}</div>
      <div className="remove">
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;
