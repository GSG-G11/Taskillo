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
tasksRoute.use(asyncMiddleware(checkAuth));
tasksRoute.post('/task', asyncMiddleware(addTask));
tasksRoute.get('/tasks', asyncMiddleware(getTasks));
tasksRoute.get('/section/:id/tasks', asyncMiddleware(getTasksSection));
tasksRoute.put('/task/:id', asyncMiddleware(editTask));
tasksRoute.delete('/task/:id', asyncMiddleware(deleteTask));
export default tasksRoute;
