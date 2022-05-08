import express from 'express';
import tasksRoute from './tasksRoute';
import { sendEmailController } from '../controllers';
import projectsRoute from './projectsRoute';

import userRoute from './userRoute';
import projectsRoute from './projectsRoute';
import taskRoute from './taskRoute';

const router = express.Router();
router.use('/api/v1', tasksRoute);
router.use('/user', userRoute);
router.use('/api/v1', projectsRoute);

router.use(taskRoute);
router.post('/sendEmail', sendEmailController);

export default router;
