import React, { Component } from 'react';
import Button from '../button';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group">
                <Button className="btn btn-light">
                    All
                </Button>
                <Button className="btn btn-outline-light">
                    Active
                </Button>
                <Button className="btn btn-outline-light">
                    Done
                </Button>
            </div>
        );
    }
}