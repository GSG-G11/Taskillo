import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import useReducer from './state/user';
import modalReducer from './state/modal';
import sidebarReducer from './state/sidebar';
import './index.css';

const store = configureStore({
  reducer: {
    user: useReducer,
    modal: modalReducer,
    sidebar: sidebarReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
