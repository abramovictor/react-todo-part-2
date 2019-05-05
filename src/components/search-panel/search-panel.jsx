import React, { Component } from 'react';
import Input from '../input';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    handleChange = ({ target: { value: term } }) => {
        this.props.onSearchTodo(term);
        this.setState({ term });
    };

    render() {
        return (
            <Input
                value={this.state.term}
                onChange={this.handleChange}
                placeholder="Search" />
        );
    }
}