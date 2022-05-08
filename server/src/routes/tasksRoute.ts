import express from 'express';
import { getTasks, deleteTaskController, getTasksSection } from '../controllers';
import { checkAuth } from '../middlewares';

const tasksRoute = express.Router();
tasksRoute.get('/tasks', checkAuth, getTasks);
tasksRoute.get('/tasks/:id', getTasksSection);
tasksRoute.delete('/deleteTask/:id', checkAuth, deleteTaskController);

export default tasksRoute;
