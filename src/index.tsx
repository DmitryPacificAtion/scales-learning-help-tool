import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

(function () {
  const element = document.createElement("div");
  element.setAttribute("id", "root");
  document.body.appendChild(element);
})();

const store = createStore(
  rootReducer
  // window.__REDUX_DEVTxOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
