import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

const proxyStore = new Store ({
  state: {},
  portName: 'test'
})

ReactDOM.render(
  <Provider store={proxyStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
