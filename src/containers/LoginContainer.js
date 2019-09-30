import React, { Component, Fragment } from "react";
import Login from "../components/Login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../store/modules/login";
import * as TodoListActions from "../store/modules/todolist";
import { fireInit, getUserInfo, getTodoList } from "../shared/Fireabase";
import { Redirect } from "react-router-dom";

class LoginContainer extends Component {
  componentDidMount() {
    fireInit();
  }

  getData = async userID => {
    const { TodoListActions } = this.props;

    const res = await getTodoList(userID);

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

    TodoListActions.setData(list);
  };
  handleOnChange = e => {
    const { LoginActions } = this.props;
    LoginActions.inputChange(e.target.value);
  };

  handleOnSubmit = () => {
    const { LoginActions, input } = this.props;
    LoginActions.loading(true);
    //registUser(inputs);
    let key = "";
    getUserInfo(input).then(snapShot => {
      snapShot.forEach(child => {
        key = child.key;
      });
      LoginActions.loading(false);
      if (key === "") {
        LoginActions.onFail(true);
      } else {
        this.getData(key);
        LoginActions.loginAction(true);
        LoginActions.setUser(key);
      }
    });
  };
  render() {
    const { logged, isLoading, isFail, input } = this.props;
    return (
      <Fragment>
        {logged && <Redirect to="/" />}

        <Login
          fail={isFail}
          value={input}
          onChange={this.handleOnChange}
          onClick={this.handleOnSubmit}
          isLoading={isLoading}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ login }) => ({
  logged: login.logged,
  userID: login.userInfo,
  isLoading: login.isLoading,
  isFail: login.isFail,
  input: login.input
});

const mapDispatchToProps = dispatch => ({
  LoginActions: bindActionCreators(loginActions, dispatch),
  TodoListActions: bindActionCreators(TodoListActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
