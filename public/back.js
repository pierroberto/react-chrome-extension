console.log('hello, back');

import {wrapStore} from 'react-chrome-redux';
import store from './store';
import rootReducer from './reducers'

const store = createStore(rootReducer, {});

wrapStore(store, {
  portName: 'test'
})
