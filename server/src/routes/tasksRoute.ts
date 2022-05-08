import express from 'express';
import { getTasks, getTasksSection,editTask, deleteTask } from '../controllers';
import { checkAuth } from '../middlewares';

const tasksRoute = express.Router();
tasksRoute.get('/tasks', checkAuth, getTasks);
tasksRoute.get('/tasks/:id', getTasksSection);
tasksRoute.put('/task/:id', checkAuth, editTask);
tasksRoute.delete('/deleteTask/:id', checkAuth, deleteTask);

export default tasksRoute;
