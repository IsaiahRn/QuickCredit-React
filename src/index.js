import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import './assets/css/myStyle.css';
import './assets/css/responsive.css';

render(<App />, document.getElementById('root'));
