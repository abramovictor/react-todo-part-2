import React from 'react';

import './input.css';

export default function Input({ className, ...props }) {
    return (
        <input
            type="text"
            className={`form-control btn btn-outline-light w-auto flex-grow-1 bg-transparent text-white${className ? ` ${className}` : ''}`}
            {...props} />
    );
}