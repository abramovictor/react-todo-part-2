import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

export default class App extends Component {
    state = {
        todos: this.props.initialData
    };

    handleDelete = (id) => {
        this.setState((state) => {
            const todos = state.todos.filter((todo) => (todo.id !== id) ? todo : null);
            return { todos };
        });
    }

    render() {
        const { todos } = this.state;

        return (
            <div className="card shadow">
                <AppHeader todos={todos} />
                <SearchPanel />
                <TodoList
                    onDelete={this.handleDelete}
                    todos={todos} />
            </div>
        );
    }
}