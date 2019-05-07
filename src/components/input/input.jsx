import React from 'react';
import classnames from 'classnames'

import './input.css';

export default function Input({ className, ...props }) {
    return (
        <input
            type="text"
            className={classnames('input form-control border-light btn btn-outline-light w-auto flex-grow-1 bg-transparent text-white', {
                [className]: !!className
            })}
            {...props} />
    );
}