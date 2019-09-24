import React from "react";

import styled, { createGlobalStyle } from "styled-components";
import TodoListContainer from "../containers/TodoListContainer";
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  overflow-y: hidden;
`;
function Home() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TodoListContainer />
      </Wrapper>
    </>
  );
}

export default Home;
