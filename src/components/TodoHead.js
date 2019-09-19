import React from "react";
import moment from "moment";
import "./TodoStyle.scss";

function TodoHead() {
  const today = moment().format("YYYY년 MM월 DD일");
  const dayName = moment()
    .lang("kr")
    .format("dddd");

  return (
    <div className="head-container">
      <h1>{today}</h1>
      <div className="day">{dayName}</div>
      <div className="task-left-container">
        <div className="task-left left">오늘 할 일 3개 남음</div>
        <div className="task-left right">총 할 일 6개 남음</div>
      </div>
    </div>
  );
}

export default TodoHead;
