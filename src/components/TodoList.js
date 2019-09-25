import React from "react";
import "./TodoStyle.scss";
import TodoItem from "./TodoItem";
import moment from "moment";
function TodoList({ today, todoList, isAnimated, onDone, onDelete }) {
  //const todayDate = today.format("YYYY-MM-DD").split("-");
  //console.log(todayDate);
  return (
    <>
      <div className="list-container">
        {todoList.map(
          todo =>
            todo.done === false && (
              <TodoItem
                key={todo.id}
                id={todo.id}
                done={todo.done}
                text={todo.text}
                date={todo.date}
                today={today}
                onDone={onDone}
                onDelete={onDelete}
                isAnimated={todo.isAnimated}
              />
            )
        )}
      </div>
      <div className="list-container">
        {todoList.map(todo => {
          if (todo.done === true && todo.deleted === false) {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                done={todo.done}
                text={todo.text}
                date={todo.date}
                today={today}
                onDone={onDone}
                onDelete={onDelete}
                isAnimated={todo.isAnimated}
              />
            );
          }
        })}
      </div>
    </>
  );
}

export default TodoList;
