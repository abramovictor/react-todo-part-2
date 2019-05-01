import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';

import todoData from './data/todo-list';

import './styles/bootstrap.css';
import './styles/styles.css';

function App({ initialData }) {
    return (
        <div className="card shadow">
            <AppHeader />
            <SearchPanel />
            <TodoList todos={initialData} />
        </div>
    );
}


ReactDOM.render(<App initialData={todoData} />, document.getElementById('root'));