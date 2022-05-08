import express from 'express';
import { checkAuth } from '../middlewares';
import {
  addTask,
  getTasks,
  getTasksSection,
  editTask,
  deleteTask,
} from '../controllers';

const tasksRoute = express.Router();
tasksRoute.use(checkAuth);
tasksRoute.post('/addTask', addTask);
tasksRoute.get('/tasks', getTasks);
tasksRoute.get('/tasks/:id', getTasksSection);
tasksRoute.put('/task/:id', editTask);
tasksRoute.delete('/deleteTask/:id', deleteTask);
export default tasksRoute;
