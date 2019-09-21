import React from "react";
import { MdAdd } from "react-icons/md";
import { DatePicker } from "antd";
import "./TodoStyle.scss";
import moment from "moment";
function TodoCreate({
  input,
  open,
  today,
  onToggle,
  onChange,
  onChangeDate,
  onSubmit
}) {
  const todayDate = today.format("YYYY-MM-DD");

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
        <div className="todo-form">
          <input
            type="text"
            onChange={onChange}
            value={input}
            className="todo-input"
            placeholder="할 일을 입력 후, Enter를 누르세요"
            autoFocus
          />
          <DatePicker
            defaultValue={moment(todayDate, "YYYY-MM-DD")}
            format={"YYYY-MM-DD"}
            size={"large"}
            onChange={onChangeDate}
          />
          <div className="btn-create-todo" onClick={onSubmit}>
            <a href="#">Create!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoCreate;
