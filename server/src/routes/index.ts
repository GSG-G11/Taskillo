import express from 'express';
import tasksRoute from './tasksRoute';
import projectsRoute from './projectsRoute';
import sectionsRoute from './sectionsRoute';
import userRoute from './usersRoute';
import { sendEmailController } from '../controllers';

const router = express.Router();
router.use('/user', userRoute);
router.post('/sendEmail', sendEmailController);
router.use(projectsRoute);
router.use(sectionsRoute);
router.use(tasksRoute);

export default router;
