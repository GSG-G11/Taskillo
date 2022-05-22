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
tasksRoute.delete('/task/:id', asyncMiddleware(deleteTask));
tasksRoute.param('projectid', checkMember);
tasksRoute.post('/project/:projectid/task', asyncMiddleware(addTask));
tasksRoute.get('/project/:projectid/section/:id/tasks', asyncMiddleware(getTasksSection));
tasksRoute.put('/project/:projectid/task/:id', asyncMiddleware(editTask));
export default tasksRoute;
