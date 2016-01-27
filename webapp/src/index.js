import React from 'react';
import ReactDOM from 'react-dom';
import App from './main';

import 'bootstrap-loader';
import '!style!css!./styles/site.css';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
