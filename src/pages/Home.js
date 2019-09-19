import React from "react";
import TodoTemplate from "../components/TodoTemplate";
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  height: 640px;
  overflow-y: hidden;
`;
function Home() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
        </TodoTemplate>
        <TodoCreate />
      </Wrapper>
    </>
  );
}

export default Home;
