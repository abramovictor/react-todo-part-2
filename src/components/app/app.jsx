import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

export default class App extends Component {
    state = {
        todos: this.props.initialData
    };

    handleDeleteTodo = (id) => {
        this.setState((state) => {
            const todos = state.todos.filter((todo) => (todo.id !== id) ? todo : null);
            return { todos };
        });
    };

    handleAddTodo = (label) => {
        console.log(label);
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