import { deleteTaskController } from '../controllers';
import { checkAuth } from '../middlewares';

const taskRoute = require('express').Router();

taskRoute.delete('/deleteTask/:id', checkAuth, deleteTaskController);

export default taskRoute;
