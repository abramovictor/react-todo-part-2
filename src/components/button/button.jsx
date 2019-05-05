import React from 'react';

export default function Button(props) {
    return (
        <button
            type={props.type ? props.type : 'button'}
            className="btn"
            {...props}>
        </button>
    );
}