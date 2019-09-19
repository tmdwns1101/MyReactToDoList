import React from "react";
import "./TodoStyle.scss";
import TodoItem from "./TodoItem";
import moment from "moment";
function TodoList() {
  const todayDate = moment()
    .format("YYYY-MM-DD")
    .split("-");
  console.log(todayDate);
  return (
    <div className="list-container">
      <TodoItem
        id={1}
        done
        text={"UI 만들기"}
        date={"2019-09-19"}
        today={todayDate}
      />
      <TodoItem
        id={2}
        text={"store 만들기"}
        date={"2019-09-20"}
        today={todayDate}
      />
      <TodoItem
        id={3}
        text={"백엔드 만들기"}
        date={"2019-10-01"}
        today={todayDate}
      />
      <TodoItem
        id={3}
        text={"백엔드 만들기"}
        date={"2019-09-30"}
        today={todayDate}
      />
      <TodoItem
        id={3}
        text={"백엔드 만들기"}
        date={"2019-10-21"}
        today={todayDate}
      />
      <TodoItem
        id={3}
        text={"백엔드 만들기"}
        date={"2019-10-10"}
        today={todayDate}
      />
      <TodoItem
        id={3}
        text={"슈퍼 들러서 과자사고 옷가게 가서 옷 사기"}
        date={"2019-11-01"}
        today={todayDate}
      />
      <TodoItem
        id={3}
        text={"백엔드 만들기"}
        date={"2019-08-19"}
        today={todayDate}
      />
    </div>
  );
}

export default TodoList;
