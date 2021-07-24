import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router/Router';

ReactDOM.render(
  <Provider store={store}>
  <Router/>
  </Provider>,
  document.getElementById('root')
);