import React, { Component } from 'react';
import { render } from 'react-dom';
import Provider from 'react-redux';
import store from './store';
import App from './App';

import './style.css';

render(<App />, document.getElementById('root'));

