import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

import "./TodoStyle.scss";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const onToggle = () => {
    setOpen(!open);
    setTimeout(setAnimation(!animation), 250);
  };
  const isopen = open ? "open" : "";
  const aniName = open ? "up" : "down";

  return (
    <div className={`todo-create-container ${aniName}`}>
      <div className="create-bar">
        <button className={`circle-button ${isopen}`} onClick={onToggle}>
          <MdAdd />
        </button>
      </div>
      <div className="input-container">
        <form className="todo-form">
          <input
            className="todo-input"
            placeholder="할 일을 입력 후, Enter를 누르세요"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}

export default TodoCreate;
