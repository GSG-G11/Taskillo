import express from 'express';
import { deleteTaskController } from '../controllers';
import { checkAuth } from '../middlewares';

const taskRoute = express.Router();

taskRoute.delete('/deleteTask/:id', checkAuth, deleteTaskController);

export default taskRoute;
