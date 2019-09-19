import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { DatePicker } from "antd";
import "./TodoStyle.scss";
import moment from "moment";

function TodoCreate() {
  const todayDate = moment().format("YYYY-MM-DD");

  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(todayDate);

  const onToggle = () => {
    setOpen(!open);
    if (open) {
      setTodo("");
      setDate(todayDate);
    }
    setTimeout(setAnimation(!animation), 250);
  };
  const isopen = open ? "open" : "";
  const aniName = open ? "up" : "down";

  const onChangeDate = (date, dateString) => {
    console.log(dateString);
    setDate(dateString);
  };
  const onChange = e => {
    const value = e.target.value;
    setTodo(value);
  };
  const onSubmit = () => {
    console.log(todo);
    console.log(date);
  };
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
            value={todo}
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
          <div className="btn-create-todo">
            <div className="btn-eff"></div>
            <a href="#">Create!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoCreate;
