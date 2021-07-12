import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import styled from 'styled-components';
import { connect } from "react-redux";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "../store/thunks";
import { getTodos, getTodosLoading } from "../store/selectors";
import { getCompletedTodos, getIncompleteTodos } from "../store/selectors";



const BigRedText =  styled.div`
height: 90px;  
font-size:48px;
  color: #ff0000;
  text-align: center;
  vertical-align: middle;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 0px;
  box-shadow: 0 4px 8px grey;
  
`
const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`


const TodoList = ({
  completedTodos,
  incompletedTodos,
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
    return () => {
      startLoadingTodos();
    };
  }, []);

  const loadingMessage = <div>Loading todos</div>;
  const content = (
    <ListWrapper>
      <BigRedText>What you got do?</BigRedText>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompletedTodos?.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3>Complete:</h3>
      {completedTodos?.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
