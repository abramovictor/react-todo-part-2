import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

export default class App extends Component {
    maxId = 100;

    static status = {
        ALL: 'all',
        ACTIVE: 'active',
        DONE: 'done',
        IMPORTANT: 'important',
    };

    state = {
        todos: this.props.initialData,
        term: '',
        filter: App.status.ALL,
    };

    get id() {
        return this.maxId++;
    }

    handleLabelChange = (id, label) => {
        this.setState((state) => {
            const todos = state.todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, label }
                }

                return todo;
            });
            return { todos };
        });
    };

    handleFilterTodo = (filter) => {
        this.setState({ filter });
    };

    filterTodo(arr, filter) {
        switch (filter) {
            case App.status.ALL:
                return arr;
            case App.status.ACTIVE:
                return arr.filter((todo) => !todo.done);
            case App.status.DONE:
                return arr.filter((todo) => todo.done);
            case App.status.IMPORTANT:
                return arr.filter((todo) => todo.important);
            default:
                return arr;
        }
    }

    searchTodo(arr, label) {
        if (label.length === 0) return arr;

        return arr.filter((todo) => {
            if (todo.label.toLowerCase().search(label.toLowerCase()) > -1) {
                return todo;
            }

            return null;
        });
    }

    handleSearchTodo = (term) => {
        this.setState({ term });
    };

    toggleTodosProperty(arr, id, propName) {
        return arr.map((todo) => {
            if (todo.id === id) {
                return { ...todo, [propName]: !todo[propName] }
            }

            return todo;
        });
    }

    handleToggleDoneTodo = (id) => {
        this.setState((state) => {
            const todos = this.toggleTodosProperty(state.todos, id, 'done');
            return { todos };
        });
    };

    handleToggleImportantTodo = (id) => {
        this.setState((state) => {
            const todos = this.toggleTodosProperty(state.todos, id, 'important');
            return { todos };
        });
    };

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
        const { todos, term, filter } = this.state;
        const visibleTodo = this.filterTodo(
            this.searchTodo(todos, term),
            filter
        );

        return (
            <div className="card shadow">
                <AppHeader
                    todos={todos} />
                <div className="card-header m-0 d-flex">
                    <SearchPanel
                        onSearchTodo={this.handleSearchTodo} />
                    <ItemStatusFilter
                        onFilterTodo={this.handleFilterTodo}
                        currentStatus={this.state.filter}
                        status={App.status} />
                </div>
                <TodoList
                    onLabelChange={this.handleLabelChange}
                    onToggleDoneTodo={this.handleToggleDoneTodo}
                    onToggleImportantTodo={this.handleToggleImportantTodo}
                    onDeleteTodo={this.handleDeleteTodo}
                    todos={visibleTodo} />
                <ItemAddForm
                    onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
}