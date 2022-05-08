import express from 'express';
import { checkAuth } from '../middlewares';
import { addTask, getTasks, getTasksSection,editTask, deleteTask } from '../controllers';

const tasksRoute = express.Router();
tasksRoute.post('/addTask', addTask);
tasksRoute.get('/tasks', checkAuth, getTasks);
tasksRoute.get('/tasks/:id', getTasksSection);
tasksRoute.put('/task/:id', checkAuth, editTask);
tasksRoute.delete('/deleteTask/:id', checkAuth, deleteTask);

export default tasksRoute;
