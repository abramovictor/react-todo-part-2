import React from 'react';

import TodoListItem from './todo-list-item.js';

function TodoList({ todos }) {
    const elements = todos.map((todo, index) =>
        <li key={index}>
            <TodoListItem {...todo} />
        </li>
    );

    return (
        <ul>
            {elements}
        </ul>
    );
}

export default TodoList;