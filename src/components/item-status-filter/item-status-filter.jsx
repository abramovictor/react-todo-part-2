import React, { Component } from 'react';
import Button from '../button';

class ItemStatusFilter extends Component {
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

export default ItemStatusFilter;