import React from 'react';

function TodoListItem({ label, important = false }) {
    const style = {
        color: important && 'tomato',
        fontWeight: 700
    };
    return <span style={style}>{label}</span>;
}

export default TodoListItem;