import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

function App({ initialData }) {
    return (
        <div className="card shadow">
            <AppHeader todos={initialData} />
            <SearchPanel />
            <TodoList todos={initialData} />
        </div>
    );
}

export default App;