import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ToolboxApp from 'react-toolbox/lib/app';

import App from './App';
import { configureStore } from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
