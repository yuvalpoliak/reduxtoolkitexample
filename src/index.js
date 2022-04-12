import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
  <Provider
  store={configureStore}
  >
    <App />
    </Provider>
  </StrictMode>,
  rootElement
);


