import React from "react";
import './todoListItem.css';

const TodoListItem = ({ todo }) => {
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      <button>Mark as Completed</button>
      <button>Remove</button>
    </div>
  </div>;
};

export default TodoListItem;
