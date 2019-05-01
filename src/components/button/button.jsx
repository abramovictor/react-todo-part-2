import React from 'react';

function Button(props) {
    
    return (
        <button type="button"
                className="btn"
                {...props}>
        </button>
    );
}

export default Button;