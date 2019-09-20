import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoListActions from "../store/modules/todolist";
import TodoTemplate from "../components/TodoTemplate";
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";

class TodoListContainer extends Component {
  handleOnChangeInput = e => {
    const { TodoListActions } = this.props;
    TodoListActions.inputChange(e.target.value);
  };

  handleOnChangeDate = (date, dateString) => {
    const { TodoListActions } = this.props;
    TodoListActions.dateChange(dateString);
  };

  handleOnToggleDone = id => {
    const { TodoListActions } = this.props;
    TodoListActions.doneCheck(id);
  };

  handleOnClickDelete = id => {
    console.log("delete!");

    const { TodoListActions } = this.props;
    TodoListActions.isAnimated(id);
    setTimeout(() => TodoListActions.deleteCheck(id), 1000);
  };

  handleOnCreate = () => {
    const { TodoListActions, text, date } = this.props;
    TodoListActions({
      text: text,
      date: date
    });
  };

  handleOnToggle = () => {
    const { TodoListActions, open, today } = this.props;
    console.log(open);
    TodoListActions.createBoxToggle(!open);
    if (open) {
      TodoListActions.inputChange("");
      TodoListActions.dateChange(today.format("YYYY-MM-DD"));
    }
  };

  render() {
    const { today, text, todoList, open, isAnimated } = this.props;
    console.log(todoList);
    return (
      <>
        <TodoTemplate>
          <TodoHead today={today} todoList={todoList} />
          <TodoList
            todoList={todoList}
            today={today}
            isAnimated={isAnimated}
            onDone={this.handleOnToggleDone}
            onDelete={this.handleOnClickDelete}
          />
        </TodoTemplate>
        <TodoCreate
          today={today}
          input={text}
          open={open}
          onToggle={this.handleOnToggle}
          onChange={this.handleOnChangeInput}
          onChangeDate={this.handleOnChangeDate}
        />
      </>
    );
  }
}

const mapStateToProps = ({ todolist }) => ({
  today: todolist.today,
  text: todolist.text,
  date: todolist.date,
  todoList: todolist.todoList,
  open: todolist.open,
  isAnimated: todolist.isAnimated
});

const mapDispatchToProps = dispatch => ({
  TodoListActions: bindActionCreators(TodoListActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
