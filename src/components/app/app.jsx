import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

export default class App extends Component {
    maxId = 100;

    state = {
        todos: this.props.initialData
    };

    get id() {
        return this.maxId++;
    }

    handleDeleteTodo = (id) => {
        this.setState((state) => {
            const todos = state.todos.filter((todo) => (todo.id !== id) ? todo : null);
            return { todos };
        });
    };

    handleAddTodo = (label) => {
        const todo = {
            label,
            id: this.id,
            important: false,
            done: false
        };

        this.setState((state) => {
            return { todos: [...state.todos, todo] }
        });
    };

    render() {
        const { todos } = this.state;

        return (
            <div className="card shadow">
                <AppHeader todos={todos} />
                <SearchPanel />
                <TodoList
                    onDelete={this.handleDeleteTodo}
                    todos={todos} />
                <ItemAddForm
                    onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
}