import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import { reducerColor } from './redux+react/reducers/reducer';

import { createStore } from './redux-learn/redux-like';
import { Provider } from './redux-learn/connect';

let store = createStore(reducerColor, {
  color: 'blue'
});
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
