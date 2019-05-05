import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../button';

import './todo-list-item.css';

class TodoListItem extends Component {
    state = {
        done: this.props.done,
        important: this.props.important
    };

    handleLableClick = () => {
        this.setState(({ done }) => {
            return { done: !done };
        });
    };

    handleImportantClick = () => {
        this.setState(({ important }) => {
            return { important: !important };
        });
    };

    render() {
        const { label, onDelete } = this.props;
        const { done, important } = this.state;

        return (
            <div className="d-flex align-items-center">

                {/* Lable */}
                <span
                    className={classNames('todo-list-item', {
                        'text-warning todo-list-item--important': important,
                        'todo-list-item--done': done
                    })}
                    onClick={this.handleLableClick}>{label}</span>
                {/* Lable End */}

                {/* Btn Group */}
                <div className="ml-auto btn-group">
                    <Button
                        onClick={onDelete}
                        className="btn btn-danger">
                        <svg className="todo-list-item--icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path>
                        </svg>
                    </Button>
                    <Button
                        className={classNames('btn', {
                            'btn-outline-warning': !important,
                            'btn-warning': important
                        })}
                        onClick={this.handleImportantClick}>
                        <svg className="todo-list-item--icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                    </Button>
                </div>
                {/* Btn Group End */}

            </div>
        );
    }
}

export default TodoListItem;