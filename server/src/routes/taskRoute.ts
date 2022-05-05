import express from 'express';
import { editTask } from '../controllers/task';

import { deleteTaskController } from '../controllers';
import { checkAuth } from '../middlewares';

const taskRoute = express.Router();

taskRoute.put('/task/:id', editTask);
taskRoute.delete('/deleteTask/:id', checkAuth, deleteTaskController);

export default taskRoute;
