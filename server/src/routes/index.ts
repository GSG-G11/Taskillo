import express from 'express';
<<<<<<< HEAD
import tasksRoute from './tasksRoute';
=======
import { sendEmailController } from '../controllers';
import projectsRoute from './projectsRoute';
import taskRoute from './taskRoute';
import userRoute from './userRoute';
>>>>>>> main

const router = express.Router();
router.use('/api/v1', tasksRoute);

router.use('/user', userRoute);
router.use('/api/v1', projectsRoute);
router.use('/api/v1', taskRoute);

router.post('/sendEmail', sendEmailController);

export default router;
