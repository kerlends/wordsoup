import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ToolboxApp from 'react-toolbox/lib/app';

import App from './App';
import { store } from './store';


ReactDOM.render(
  <Provider store={store}>
    <ToolboxApp>
      <App />
    </ToolboxApp>
  </Provider>
  , document.getElementById('root')
);
