import express from 'express';
import getTasksSection from '../controllers/projects';

const tasksRoute = express.Router();
tasksRoute.post('/tasks/:id', getTasksSection);

export default tasksRoute;
