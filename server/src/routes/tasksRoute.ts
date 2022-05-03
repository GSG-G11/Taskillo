import express from 'express';
import getTasksSection from '../controllers/projects';

const tasksRoute = express.Router();
tasksRoute.get('/tasks/:id', getTasksSection);

export default tasksRoute;