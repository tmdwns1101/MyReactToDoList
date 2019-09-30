import React from "react";
import styled from "styled-components";
import { MdEmail, MdCheckCircle, MdFace } from "react-icons/md";
import { Link } from "react-router-dom";
import { Spin } from "antd";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const SignUpContainer = styled.div`
  width: 98vw;
  height: 500px;
  padding: 1rem;
  display: flex;
  background-color: #f8f9fa;

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  border: 1px solid #37b24d;
  flex-direction: column;
  justify-content: space-around;
`;

const SignUpHeader = styled.div`
  border-bottom: 1px solid #868e96;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    color: #099268;
  }
  p {
    color: #99e9f2;
  }
  margin-bottom: 1rem;
`;

const SignUpBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  & + & {
    margin-bottom: 1rem;
  }
`;
const SignUpItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ErrorMsg = styled.span`
  color: red;
  position: relative;
  font-size: 10px;
  top: 0;
  left: 20%;
`;

const SuccessMsg = styled.span`
  color: green;
  position: relative;
  font-size: 10px;
  top: 0;
  left: 20%;
`;

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #ced0da;
  height: 32px;
  width: 80%;

  padding: 1em;
`;
const AlreadySignUp = styled.div`
  flex: 1;
`;
const Button = styled.button`
  border-radius: 3px;
  text-align: center;
  font-size: 1rem;
  background-color: #3bc9db;
  color: white;
  border: none;
  font-weight: 300;
  padding: 1em;
  cursor: pointer;
`;

function SignUp({ email, emailCheck, name, onClick, onChange, loading }) {
  function emailConfirm(email) {
    if (email !== "") {
      if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        return -1;
      } else {
        return 1;
      }
    }
    return 2;
  }

  function emailCheckConfirm(email, emailCheck) {
    if (emailCheck !== "") {
      if (email !== emailCheck) {
        return -1;
      } else {
        return 1;
      }
    }
    return 2;
  }

  return (
    <Container>
      <Spin tip="Loading..." spinning={loading}>
        <SignUpContainer>
          <SignUpHeader>
            <h2>SignUp</h2>
            <p>Join Us!!</p>
          </SignUpHeader>
          <SignUpBody>
            <ItemWrapper>
              <SignUpItem>
                <label>
                  <MdEmail size={32} />
                </label>
                <Input
                  onChange={onChange}
                  type="text"
                  name="email"
                  value={email}
                  id="email"
                  placeholder="이메일을 입력해주세요."
                />
              </SignUpItem>
              {emailConfirm(email) === -1 && (
                <ErrorMsg>이메일 형식 틀렸습니다.</ErrorMsg>
              )}
              {emailConfirm(email) === 1 && (
                <SuccessMsg>올바른 이메일 형식 입니다.</SuccessMsg>
              )}
            </ItemWrapper>
            <ItemWrapper>
              <SignUpItem>
                <label>
                  <MdCheckCircle size={32} />
                </label>
                <Input
                  onChange={onChange}
                  type="text"
                  name="emailCheck"
                  value={emailCheck}
                  id="emailCheck"
                  placeholder="이메일 확인"
                />
              </SignUpItem>
              {emailCheckConfirm(email, emailCheck) === -1 && (
                <ErrorMsg>입력한 이메일과 다릅니다.</ErrorMsg>
              )}
              {emailCheckConfirm(email, emailCheck) === 1 && (
                <SuccessMsg>입력한 이메일과 같습니다.</SuccessMsg>
              )}
              <SignUpItem>
                <label>
                  <MdFace size={32} />
                </label>
                <Input
                  onChange={onChange}
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  placeholder="이름을 입력 해주세요."
                />
              </SignUpItem>
              <SuccessMsg></SuccessMsg>
            </ItemWrapper>
            <ItemWrapper>
              <SignUpItem>
                <AlreadySignUp>
                  이미 계정이 있으세요? <Link to="login">로그인</Link>
                </AlreadySignUp>
                <Button onClick={onClick}>계정 만들기</Button>
              </SignUpItem>
            </ItemWrapper>
          </SignUpBody>
        </SignUpContainer>
      </Spin>
    </Container>
  );
}

export default SignUp;
