import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import { reducerColor } from './redux+react/reducers/reducer';

import {createStore} from 'redux';
import { Provider } from 'react-redux'

let store = createStore(reducerColor, {
  color: 'blue'
});
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
