import React from 'react';
import ItemStatusFilter from '../item-status-filter';
import Input from '../input';

export default function SearchPanel() {
    return (
        <div className="card-body m-0 d-flex">
            <Input placeholder="Search" />
            <ItemStatusFilter />
        </div>
    );
}