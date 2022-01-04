import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import reducer from './reducers/index';


// In this main 'index', will create store with reducer and composed applyMiddleware thunk.
// and then surround the App as provider with prop store = {store}
const store = createStore(reducer, compose(applyMiddleware(Thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);