import React from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css';

function TodoList({ todos, onDeleteTodo, onToggleImportantTodo, onToggleDoneTodo }) {
    return (
        <footer className="card-footer">
            <ul className="list-group">
                {todos.map(({ id, ...todoProps }) =>
                    <li className="todo-list list-group-item shadow-sm" key={id}>
                        <TodoListItem
                            onToggleDone={() => onToggleDoneTodo(id)}
                            onToggleImportant={() => onToggleImportantTodo(id)}
                            onDelete={() => onDeleteTodo(id)}
                            {...todoProps} />
                    </li>
                )}
            </ul>
        </footer>
    );
}

export default TodoList;