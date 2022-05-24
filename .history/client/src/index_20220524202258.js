import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import useReducer from './state/user';
import modalReducer from './state/modal';
import sidebarReducer from './state/sidebar';
import taskReducer from './state/task'
import paginationReducer from './state/pagination';
import projectDashboardReducer from './state/projectDashboard';
import userProjects from './state/userProjects';
import projectReducer from './state/project';
import tasksReducer from './state/tasks';
import sectionsReducer from './state/sections';
import actionReducer from './state/action';
import currentReducer from './state/current';
import './index.css';

const store = configureStore({
  reducer: {
    user: useReducer,
    modal: modalReducer,
    sidebar: sidebarReducer,
    task: taskReducer,
    pagination:paginationReducer,
    projectDashboard: projectDashboardReducer,
    userProjects: userProjects,
    project: projectReducer,
    tasks: tasksReducer,
    sections: sectionsReducer,
    action: actionReducer,
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
