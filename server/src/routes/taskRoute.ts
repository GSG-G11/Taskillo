import express from 'express';

import { deleteTask, editTask } from '../controllers';
import { checkAuth } from '../middlewares';

const taskRoute = express.Router();

taskRoute.put('/task/:id', checkAuth, editTask);
taskRoute.delete('/deleteTask/:id', checkAuth, deleteTask);

export default taskRoute;
