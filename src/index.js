import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header.js';
import SearchPanel from './components/search-panel.js';
import TodoList from './components/todo-list.js';

import todoData from './data/todo-list.json';

function App({ initialData }) {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={initialData} />
        </div>
    );
}


ReactDOM.render(<App initialData={todoData} />, document.getElementById('root'));