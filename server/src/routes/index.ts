import express from 'express';
import { sendEmailController } from '../controllers';
import projectsRoute from './projectsRoute';
import taskRoute from './taskRoute';
import userRoute from './userRoute';

const router = express.Router();

router.use('/user', userRoute);
router.use('/api/v1', projectsRoute);
router.use('/api/v1', taskRoute);

router.post('/sendEmail', sendEmailController);

export default router;
