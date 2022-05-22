import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import useReducer from './state/user';
import modalReducer from './state/modal';
import sidebarReducer from './state/sidebar';
import userProjects from './state/userProjects';
import projectReducer from './state/project';
import tasksReducer from './state/tasks';
import sectionsReducer from './state/sections';

import './index.css';

const store = configureStore({
  reducer: {
    user: useReducer,
    modal: modalReducer,
    sidebar: sidebarReducer,
    userProjects: userProjects,
    project: projectReducer,
    tasks: tasksReducer,
    sections: sectionsReducer,
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
