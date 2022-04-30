import express from 'express';
import { deleteTaskController } from '../controllers';

const taskRoute = express.Router();

taskRoute.delete('/deleteTask/:id', deleteTaskController);

export default taskRoute;
