import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoListActions from "../store/modules/todolist";
import TodoTemplate from "../components/TodoTemplate";
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";
import {
  fireInit,
  getTodoList,
  createTodo,
  doneTodo,
  deleteTodo
} from "../shared/Fireabase";
import { Spin } from "antd";

class TodoListContainer extends Component {
  getData = async () => {
    const { TodoListActions } = this.props;

    /*getTodoList(1).then(res => {
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
    });*/
    const res = await getTodoList(1);

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
    TodoListActions.setData(list);
    TodoListActions.isLoading(false);
  };
  componentDidMount() {
    fireInit();
    this.getData();
  }
  handleOnChangeInput = e => {
    const { TodoListActions } = this.props;
    TodoListActions.inputChange(e.target.value);
  };

  handleOnChangeDate = (date, dateString) => {
    const { TodoListActions } = this.props;
    TodoListActions.dateChange(dateString);
  };

  handleOnToggleDone = (id, done) => {
    const { TodoListActions } = this.props;
    doneTodo(1, id, done);
    TodoListActions.doneCheck(id);
  };

  handleOnClickDelete = id => {
    console.log("delete!");

    const { TodoListActions } = this.props;
    deleteTodo(1, id);
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
    /*TodoListActions.create({
      text: text,
      date: date
    });*/
    TodoListActions.inputChange("");
    createTodo(1, text, date);
    TodoListActions.isLoading(true);
    this.getData(1);
  };

  render() {
    const { today, text, todoList, open, isLoading } = this.props;
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
      <Spin tip="Loading..." spinning={isLoading}>
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
      </Spin>
    );
  }
}

const mapStateToProps = ({ todolist }) => ({
  today: todolist.today,
  text: todolist.text,
  date: todolist.date,
  todoList: todolist.todoList,
  open: todolist.open,
  isLoading: todolist.isLoading
});

const mapDispatchToProps = dispatch => ({
  TodoListActions: bindActionCreators(TodoListActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
