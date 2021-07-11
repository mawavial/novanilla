import React from 'react';
import './TodoListItem.css';
// import { connect } from 'react-redux'
// import {completeTodo } from '../store/actions';

const TodoListItem = ({ todo, onRemovePressed, onMarkPressed, onCompletedPressed}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {todo.isCompleted ? null : <button className="completed-button" onClick={() => onCompletedPressed(todo.text)}>Mark As Completed</button>}
            <button className="remove-button" onClick={() => onRemovePressed(todo.text)} >Remove</button>
        </div>
    </div>
);



// const mapDispatchToProps = (dispatch) => ({
//     onMarkPressed: (text) => dispatch(completeTodo(text))
// });

// export default connect(null,mapDispatchToProps)(TodoListItem);
export default TodoListItem;