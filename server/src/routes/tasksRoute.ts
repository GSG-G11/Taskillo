import express from 'express';
import getTasks from '../controllers/projects';
import checkAuth from '../middlewares/checkAuth';

const tasksRoute = express.Router();
tasksRoute.get('/tasks', checkAuth, getTasks);

export default tasksRoute;
