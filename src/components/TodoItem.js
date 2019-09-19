import React from "react";
import "./TodoStyle.scss";
import { MdDone, MdDelete } from "react-icons/md";
import moment from "moment";
import warning from "tiny-warning";

function TodoItem({ id, done, text, date, today }) {
  const selected = done ? "done" : "";

  const thisDate = date.split("-");
  const date1 = moment(today);
  const date2 = moment(thisDate);
  const remain_day = date2.diff(date1, "days");
  const color = remain_day > 5 ? "safe" : "warning";

  console.log(remain_day);
  return (
    <div className="todo-item">
      <div className={`check-circle ${selected}`}>{done && <MdDone />}</div>
      <div className={`text ${selected}`}>{text}</div>
      <div className={`d-day ${color}`}>
        D {remain_day >= 0 ? "-" : "+"} {Math.abs(remain_day)}
      </div>
      <div className="remove">
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;
