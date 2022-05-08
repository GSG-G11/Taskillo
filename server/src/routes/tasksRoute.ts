import express from 'express';
import { getTasks, deleteTask, editTask, } from '../controllers';
import { checkAuth } from '../middlewares';

const tasksRoute = express.Router();
tasksRoute.get('/tasks', checkAuth, getTasks);
tasksRoute.delete('/deleteTask/:id', checkAuth, deleteTask);
tasksRoute.put('/task/:id', checkAuth, editTask);
tasksRoute.delete('/deleteTask/:id', checkAuth, deleteTask);

export default tasksRoute;
