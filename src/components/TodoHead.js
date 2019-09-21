import React from "react";
import "./TodoStyle.scss";
function TodoHead({ today, todoList }) {
  console.log(today);
  const todayText = today.clone().format("YYYY년 MM월 DD일");
  const dayName = today.clone().format("dddd");
  const todayTaskLeft = todoList.filter(
    elem => elem.done === false && elem.date === today.format("YYYY-MM-DD")
  );
  const TotalTaskLeft = todoList.filter(elem => elem.done === false);
  return (
    <div className="head-container">
      <h1>{todayText}</h1>
      <div className="day">{dayName}</div>
      <div className="task-left-container">
        <div className="task-left left">
          오늘 할 일 {todayTaskLeft.length}개 남음
        </div>
        <div className="task-left right">
          총 할 일 {TotalTaskLeft.length}개 남음
        </div>
      </div>
    </div>
  );
}

export default TodoHead;
