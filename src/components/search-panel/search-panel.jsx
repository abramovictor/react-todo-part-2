import React from 'react';

import Button from '../button/button';

function SearchPanel() {
    return (
        <div className="card-body m-0 form-group btn-group">
            <input className="form-control btn btn-outline-light" placeholder="search" />
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

export default SearchPanel;