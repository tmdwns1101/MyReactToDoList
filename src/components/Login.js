import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { Spin } from "antd";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const LoginContainer = styled.div`
  width: 300px;
  height: 400px;
  padding: 1rem;
  display: flex;
  background-color: #f8f9fa;

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  border: 1px solid #37b24d;
  flex-direction: column;
  justify-content: space-around;
`;

const LoginHeader = styled.div`
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
`;

const LoginBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const LoginItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #ced0da;
  height: 32px;
  width: 80%;

  padding: 1em;
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

const ErrorMsg = styled.span`
  color: red;
  position: relative;
  font-size: 10px;
`;

function Login({ fail, value, onChange, onClick, isLoading }) {
  return (
    <Container>
      <Spin tip="Loading..." spinning={isLoading}>
        <LoginContainer>
          <LoginHeader>
            <h2>투두리스트</h2>
            <p>Well Come!!</p>
          </LoginHeader>
          <LoginBody>
            <LoginItem>
              <label>
                <MdEmail size={32} />
              </label>
              <Input
                type="text"
                id="email"
                onChange={onChange}
                value={value}
                placeholder="이메일을 입력해주세요."
              />
            </LoginItem>
            {fail && <ErrorMsg>죄송합니다. 없는 이메일입니다.</ErrorMsg>}
            <LoginItem>
              <Button onClick={onClick}>로그인</Button>
            </LoginItem>
            <LoginItem>
              <div>회원이 아니 신가요?</div>
              <div>
                <Link to="/signup">회원 가입</Link>
              </div>
            </LoginItem>
          </LoginBody>
        </LoginContainer>
      </Spin>
    </Container>
  );
}

export default Login;
