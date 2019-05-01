import React from 'react';
import classNames from 'classnames';

function TodoListItem({ label, important = false }) {
    return <span className={classNames({ 'text-warning font-weight-bold': important })}>{label}</span>;
}

export default TodoListItem;