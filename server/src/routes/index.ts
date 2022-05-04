import express from 'express';
import taskRoute from './taskRoute';

const router = express.Router();

router.use(taskRoute);

export default router;
