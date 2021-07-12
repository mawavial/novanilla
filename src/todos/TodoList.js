import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { connect } from "react-redux";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "../store/thunks";
import { getTodos, getTodosLoading } from "../store/selectors";
import { getCompletedTodos, getIncompleteTodos } from "../store/selectors";

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
    <div className="list-wrapper">
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
    </div>
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
