import express from 'express';
import { asyncMiddleware, checkAuth } from '../middlewares';
import {
  addTask,
  getTasks,
  getTasksSection,
  editTask,
  deleteTask,
} from '../controllers';

const tasksRoute = express.Router();
tasksRoute.use(checkAuth);
tasksRoute.post('/addTask', asyncMiddleware(addTask));
tasksRoute.get('/tasks', asyncMiddleware(getTasks));
tasksRoute.get('/tasks/:id', asyncMiddleware(getTasksSection));
tasksRoute.put('/task/:id', asyncMiddleware(editTask));
tasksRoute.delete('/deleteTask/:id', asyncMiddleware(deleteTask));
export default tasksRoute;
