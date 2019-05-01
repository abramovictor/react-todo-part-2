import React from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css';

function TodoList({ todos }) {
    return (
        <footer className="card-footer">
            <ul className="list-group">
                {todos.map((todo, index) =>
                    <li className="todo-list list-group-item shadow-sm" key={index}>
                        <TodoListItem {...todo} />
                    </li>
                )}
            </ul>
        </footer>
    );
}

export default TodoList;