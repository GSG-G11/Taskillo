import express from 'express';

const tasksRoute = express.Router();
tasksRoute.get('/tasks',getTasks);

export default tasksRoute;