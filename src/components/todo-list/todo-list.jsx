import React from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css';

export default function TodoList({ todos, onDeleteTodo, onToggleImportantTodo, onToggleDoneTodo }) {
    return (
        <footer className="card-footer">
            <ul className="list-group">
                {todos.map(({ id, ...todoProps }) =>
                    <li className="todo-list list-group-item p-0 my-1 shadow-sm" key={id}>
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