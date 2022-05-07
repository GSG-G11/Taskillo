import express from 'express';
import { addTask, deleteTaskController } from '../controllers';
import { checkAuth } from '../middlewares';

const tasksRoute = express.Router();
tasksRoute.post('/tasks',checkAuth, addTask);
tasksRoute.delete('/deleteTask/:id', checkAuth, deleteTaskController);

export default tasksRoute;
