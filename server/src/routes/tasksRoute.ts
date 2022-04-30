import express from 'express';
import getTasks from '../controllers/projects';

const tasksRoute = express.Router();
tasksRoute.get('/tasks', getTasks);

export default tasksRoute;
