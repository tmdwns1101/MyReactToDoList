import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoListActions from "../store/modules/todolist";
import TodoTemplate from "../components/TodoTemplate";
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";
import { fireInit, getTodoList, createTodo } from "../shared/Fireabase";
import { Spin } from "antd";

class TodoListContainer extends Component {
  getData = async () => {
    const { TodoListActions } = this.props;

    getTodoList(1).then(res => {
      console.log(res.val());
      const list = [];
      res.forEach(element => {
        console.log(element.val());
        console.log(element.key);
        let value = element.val();
        let id = element.key;
        let item = {
          ...value,
          id: id
        };
        list.push(item);
      });
      console.log(list);
    });
  };
  componentDidMount() {
    fireInit();
    this.getData();
    /*getTodoList(1).then(res => {
      console.log(res.val());
    });*/
    /*const dbRef = database.ref("/todolist/1");
    console.log(dbRef);

    dbRef.once("value").then(function(data) {
      console.log("db acess");
      console.log(data.val());
    });*/
  }
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
    setTimeout(() => TodoListActions.deleteCheck(id), 500);
  };

  /*handleOnCreate = () => {
    const { TodoListActions, text, date } = this.props;
    TodoListActions({
      text: text,
      date: date
    });
   
  };*/

  handleOnToggle = () => {
    const { TodoListActions, open, today } = this.props;
    console.log(open);
    TodoListActions.createBoxToggle(!open);
    if (open) {
      TodoListActions.inputChange("");
      TodoListActions.dateChange(today.format("YYYY-MM-DD"));
    }
  };
  handleOnSubmit = () => {
    const { TodoListActions, text, date } = this.props;
    TodoListActions.create({
      text: text,
      date: date
    });
    TodoListActions.inputChange("");
    createTodo(1, text, date);
  };

  render() {
    const { today, text, todoList, open } = this.props;
    console.log(todoList);
    const cloneList = todoList;
    if (cloneList.length > 0) {
      cloneList.sort((elem1, elem2) => {
        if (elem1.date > elem2.date) {
          return 1;
        }
        if (elem1.date < elem2.date) {
          return -1;
        }
        return 0;
      });
    }
    return (
      <>
        <TodoTemplate>
          <TodoHead today={today} todoList={todoList} />
          <TodoList
            todoList={cloneList}
            today={today}
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
          onSubmit={this.handleOnSubmit}
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
  open: todolist.open
});

const mapDispatchToProps = dispatch => ({
  TodoListActions: bindActionCreators(TodoListActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
