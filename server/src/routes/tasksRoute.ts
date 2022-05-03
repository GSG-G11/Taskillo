import express from 'express';

const tasksRoute = express.Router();
tasksRoute.post('/tasks', addTasks);

export default tasksRoute;