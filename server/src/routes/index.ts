import express from 'express';
import tasksRoute from './tasksRoute';

const router = express.Router();
router.use('/api/v1', tasksRoute);

export default router;
