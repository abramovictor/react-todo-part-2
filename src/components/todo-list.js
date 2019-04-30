import React from 'react';

import TodoListItem from './todo-list-item.js';

function TodoList({ todos }) {
    const elements = todos.map(({ label, important }) =>
        <li key={label}>
            <TodoListItem
                label={label}
                important={important} />
        </li>
    );

    return (
        <ul>
            { elements }
        </ul>
    );
}

export default TodoList;