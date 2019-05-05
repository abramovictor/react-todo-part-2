import React, { Component } from 'react';
import Button from '../button';
import Input from '../input';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        let label = this.state.label.trim();

        if (label) {
            this.props.onAddTodo(this.state.label);
            this.setState({ label: '' });
        }
    }

    handleLabelChange = ({ target: { value: label } }) => {
        this.setState({ label });
    };

    render() {
        let { label } = this.state;

        return (
            <footer className="card-footer">
                <form
                    onSubmit={this.handleFormSubmit}
                    className="d-flex">

                    <Input
                        onChange={this.handleLabelChange}
                        value={label}
                        placeholder="What needs to be done" />

                    <Button
                        type="submit"
                        className="btn btn-light">
                        Add todo
                    </Button>

                </form>
            </footer>
        );
    }
}