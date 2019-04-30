import React from 'react';

import TodoListItem from './todo-list-item.js';

function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(({ label, important }) => <li key={label} ><TodoListItem label={label} important={important} /></li>)}
        </ul>
    );
}

export default TodoList;