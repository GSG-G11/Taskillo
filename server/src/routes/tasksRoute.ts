import express from 'express';
import { asyncMiddleware, checkAuth, checkMember } from '../middlewares';
import {
  addTask,
  getTasks,
  getTasksSection,
  editTask,
  deleteTask,
} from '../controllers';

const tasksRoute = express.Router();
tasksRoute.use(asyncMiddleware(checkAuth));
tasksRoute.get('/tasks', asyncMiddleware(getTasks));
tasksRoute.put('/task/:id', asyncMiddleware(editTask));
tasksRoute.delete('/task/:id', asyncMiddleware(deleteTask));
tasksRoute.param('projectid', checkMember);
tasksRoute.post('/project/:projectid/task', asyncMiddleware(addTask));
tasksRoute.get('/project/:projectid/section/:id/tasks', asyncMiddleware(getTasksSection));
export default tasksRoute;
