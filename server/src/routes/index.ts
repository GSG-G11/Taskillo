import express from 'express';
import tasksRoute from './tasksRoute';
import { sendEmailController } from '../controllers';
import projectsRoute from './projectsRoute';
import userRoute from './userRoute';

const router = express.Router();
router.use('/user', userRoute);
router.use('/api/v1', tasksRoute);
router.use('/api/v1', projectsRoute);
router.post('/sendEmail', sendEmailController);

export default router;
