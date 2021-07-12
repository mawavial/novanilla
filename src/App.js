import React from "react";
import { hot } from "react-hot-loader";
import TodoList from "./todos/TodoList";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const App = () => (
  <AppContainer >
    <TodoList />
  </AppContainer>
);

export default hot(module)(App);
