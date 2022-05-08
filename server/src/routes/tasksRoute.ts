import express from 'express';
import { getTasks, deleteTaskController } from '../controllers';
import { checkAuth } from '../middlewares';

const tasksRoute = express.Router();
tasksRoute.get('/tasks', checkAuth, getTasks);
tasksRoute.delete('/deleteTask/:id', checkAuth, deleteTaskController);

export default tasksRoute;
