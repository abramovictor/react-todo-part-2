import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import todoData from './data/todo-list';

import './styles/bootstrap.css';
import './styles/styles.css';

ReactDOM.render(<App initialData={todoData} />, document.getElementById('root'));