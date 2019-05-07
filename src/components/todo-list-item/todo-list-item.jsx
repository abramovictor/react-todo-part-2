import React, { Component } from 'react';
import classnames from 'classnames';
import Button from '../button';
import Input from '../input';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    state = {
        editMode: false,
        label: this.props.label
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.handleToggleEditMode();

        let label = this.state.label.trim();
        if (label && label !== this.props.label) {
            this.props.onLabelChange(this.props.id, this.state.label);
        }
        else {
            this.setState({ label: this.props.label });
        }
    };

    handleChange = ({ target: { value: label } }) => {
        this.setState({ label });
    };

    handleToggleEditMode = () => {
        this.setState((state) => {
            return { editMode: !state.editMode };
        });
    };

    get renderDisplay() {
        const { label, important, done, onDelete, onToggleImportant, onToggleDone } = this.props;
        return (
            <div className="d-flex align-items-start">
                <span
                    onClick={onToggleDone}
                    className={
                        classnames('todo-list-item--label d-flex align-items-start', {
                            'text-warning todo-list-item--important': important,
                            'todo-list-item--done': done
                        })
                    }>

                    <Button
                        className="btn p-0 shadow-none">
                        <svg className="todo-list-item--icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            {done
                                ? <path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path>
                                : <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path>
                            }
                        </svg>
                    </Button>

                    <span className="px-3">
                        {label}
                    </span>
                </span>

                <div className="ml-auto btn-group">
                    <Button
                        title="Delete to-do"
                        onClick={onDelete}
                        className="btn p-0 text-white mr-3 shadow-none">

                        <svg className="todo-list-item--icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path>
                        </svg>
                    </Button>

                    <Button
                        title="Change label"
                        onClick={this.handleToggleEditMode}
                        className="btn p-0 text-white mr-3 shadow-none">

                        <svg className="todo-list-item--icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
                        </svg>
                    </Button>

                    <Button
                        title="Important to-do"
                        onClick={onToggleImportant}
                        className={classnames('btn p-0 shadow-none', {
                            'text-white': !important,
                            'text-warning': important
                        })}>
                        <svg className="todo-list-item--icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            {important
                                ? <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                : <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                            }
                        </svg>
                    </Button>
                </div>

            </div>
        );
    }

    get renderEditForm() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="h-100 flex-grow-1 d-flex">
                <Input
                    value={this.state.label}
                    onChange={this.handleChange}
                    placeholder="Change label" />
                <Button
                    type="submit"
                    className="btn btn-light">
                    <svg className="todo-list-item--icon todo-list-item--icon_save" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"></path>
                    </svg>
                </Button>
            </form>
        );
    }

    render() {
        return (
            <div className="todo-list-item p-3 w-100">
                {this.state.editMode ? this.renderEditForm : this.renderDisplay}
            </div>
        );
    }
}
