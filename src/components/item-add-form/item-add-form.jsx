import React, { Component } from 'react';

import Button from '../button';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    render() {
        return (
            <footer className="card-footer">
                <Button
                    onClick={() => this.props.onAddTodo('Hello, world')}
                    className="btn btn-light">
                    Add todo
                </Button>
            </footer>
        );
    }
}