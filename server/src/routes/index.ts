import express from 'express';
import { sendEmailController } from '../controllers';
import projectsRoute from './projectsRoute';
import taskRoute from './taskRoute';
import userRoute from './userRoute';
import projectsRoute from './projectsRoute';
import taskRoute from './taskRoute';

const router = express.Router();

router.use('/user', userRoute);
router.use(projectsRoute);
router.use(taskRoute);

router.use(taskRoute);
router.post('/sendEmail', sendEmailController);

export default router;
