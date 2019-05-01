import React from 'react';
import ItemStatusFilter from '../item-status-filter';

function SearchPanel() {
    return (
        <div className="card-body m-0 d-flex">
            <input className="form-control btn btn-outline-light" placeholder="search" />
            <ItemStatusFilter />
        </div>
    );
}

export default SearchPanel;