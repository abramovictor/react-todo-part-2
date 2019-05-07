import React from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css';

export default function TodoList({ todos, onDeleteTodo, onToggleImportantTodo, onToggleDoneTodo, onLabelChange }) {
    return (
        <div className="card-body">
            <ul className="list-group">
                {todos.length ?
                    todos.map(({ id, ...todoProps }) =>
                        <li
                            className="todo-list border border-light d-flex align-items-center list-group-item p-0 my-1 shadow"
                            key={id}>
                            <TodoListItem
                                id={id}
                                onToggleDone={() => onToggleDoneTodo(id)}
                                onToggleImportant={() => onToggleImportantTodo(id)}
                                onDelete={() => onDeleteTodo(id)}
                                onLabelChange={onLabelChange}
                                {...todoProps} />
                        </li>
                    ) :
                    <li className="list-group-item text-center text-muted">No to-dos</li>
                }
            </ul>
        </div>
    );
}