import getTasksSection from '../controllers/projects';

const tasksRoute = require('express').Route();

tasksRoute.post('/tasks/:id', getTasksSection);

export default tasksRoute;
