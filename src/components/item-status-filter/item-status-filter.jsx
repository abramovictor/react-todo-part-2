import React, { Component } from 'react';
import classnames from 'classnames'
import Button from '../button';

export default class ItemStatusFilter extends Component {
    buttons = [
        { status: this.props.status.ALL, label: 'All' },
        { status: this.props.status.IMPORTANT, label: 'Important' },
        { status: this.props.status.ACTIVE, label: 'Active' },
        { status: this.props.status.DONE, label: 'Done' }
    ];

    render() {
        const { currentStatus } = this.props;

        return (
            <div className="btn-group">
                {this.buttons.map(({ status, label }) =>
                    <Button
                        onClick={() => this.props.onFilterTodo(status)}
                        className={classnames('btn', {
                            'btn-light': status === currentStatus,
                            'btn-outline-light': status !== currentStatus,
                        })}
                        key={status}>

                        {label}
                    </Button>
                )}
            </div>
        );
    }
}