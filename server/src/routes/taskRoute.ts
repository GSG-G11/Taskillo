import express from 'express';
import { editTask } from '../controllers/task';

const taskRoute = express.Router();

taskRoute.put('/task/:id', editTask);

export default taskRoute;
