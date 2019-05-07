import React from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css';

export default function TodoList({ todos, onDeleteTodo, onToggleImportantTodo, onToggleDoneTodo, onLabelChange }) {
    return (
        <footer className="card-footer">
            <ul className="list-group">
                {todos.map(({ id, ...todoProps }) =>
                    <li className="todo-list d-flex align-items-center list-group-item p-0 my-1 shadow-sm" key={id}>
                        <TodoListItem
                            id={id}
                            onToggleDone={() => onToggleDoneTodo(id)}
                            onToggleImportant={() => onToggleImportantTodo(id)}
                            onDelete={() => onDeleteTodo(id)}
                            onLabelChange={onLabelChange}
                            {...todoProps} />
                    </li>
                )}
            </ul>
        </footer>
    );
}