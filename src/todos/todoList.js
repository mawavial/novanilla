import React from "react";
import NewTodoForm from "./newTodoForm";
import "./todoList.css";

const TodoList = ({ todos }) => {
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>;
};

export default TodoList;
