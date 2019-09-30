import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as signUpActions from "../store/modules/signup";
import SignUp from "../components/SignUp";
import Alert from "../components/Alert";
import { registUser, getUserInfo, fireInit } from "../shared/Fireabase";

class SignUpContainer extends Component {
  componentDidMount() {
    fireInit();
    /*if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }*/
  }

  handleOnChange = e => {
    const { SignUpActions, inputs } = this.props;
    const { name, value } = e.target;
    SignUpActions.changeInputs({
      ...inputs,
      [name]: value
    });
  };

  handleOnSubmit = () => {
    console.log("submit!");
    const { SignUpActions, inputs } = this.props;
    const { email, emailCheck, name } = inputs;
    if (
      email === "" ||
      email.indexOf("@") === -1 ||
      email.indexOf(".") === -1
    ) {
      SignUpActions.changeText("이메일을 다시 확인 하세요.");
      SignUpActions.createAlert(true);
    } else if (email !== emailCheck || emailCheck === "") {
      SignUpActions.changeText("이메일 재확인 입력을 다시 확인 하세요.");
      SignUpActions.createAlert(true);
    } else if (name === "") {
      SignUpActions.changeText("이름을 입력 해주세요.");
      SignUpActions.createAlert(true);
    } else {
      SignUpActions.loading(true);
      //registUser(inputs);
      let key = "";
      getUserInfo(email).then(snapShot => {
        snapShot.forEach(child => {
          key = child.key;
        });
        if (key === "") {
          registUser(inputs).then(() => {
            SignUpActions.loading(false);
            SignUpActions.createAlert(true);

            SignUpActions.changeText("가입이 완료되었습니다.");
            SignUpActions.success(true);
          });
        } else {
          SignUpActions.loading(false);
          SignUpActions.createAlert(true);
          SignUpActions.changeText("이미 가입된 이메일 입니다.");
        }
      });
    }

    /*getUserInfo("tmdwns1101@naver.com").then(res => {
      console.log(res);
      res.forEach(child => {
        console.log(child.key);
      });
    });*/

    /*var ref = firebase.database().ref("/users");
    ref
      .orderByChild("email")
      .equalTo("tmdwns1101@naver.com")
      .once("value", snapshot => {
        console.log(snapshot);
        snapshot.forEach(child => {
          key = child.key;
          console.log(child.key);
        });
      })
      .then(() => {
        console.log("key", key);
      });*/
  };

  handleConfirm = () => {
    const { SignUpActions, success } = this.props;

    SignUpActions.createAlert(false);

    if (success === true) {
      SignUpActions.success(false);
      SignUpActions.disable(false);
      SignUpActions.changeInputs({
        email: "",
        emailCheck: "",
        name: ""
      });
    }
  };

  render() {
    const { inputs, success, text, alert, isLoading } = this.props;
    const { email, emailCheck, name } = inputs;
    console.log(inputs);
    console.log(alert);
    console.log(text);
    console.log(success);
    return (
      <Fragment>
        {alert && (
          <Alert success={success} text={text} onClick={this.handleConfirm} />
        )}
        <SignUp
          loading={isLoading}
          email={email}
          emailCheck={emailCheck}
          name={name}
          onClick={this.handleOnSubmit}
          onChange={this.handleOnChange}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ signup }) => ({
  inputs: signup.inputs,
  success: signup.isSuccess,
  text: signup.text,
  alert: signup.alert,
  isLoading: signup.isLoading
});

const mapDispatchToProps = dispatch => ({
  SignUpActions: bindActionCreators(signUpActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
