import express from 'express';
import tasksRoute from './tasksRoute';
import projectsRoute from './projectsRoute';
import sectionsRoute from './sectionsRoute';
import usersRoute from './usersRoute';
import { sendEmail } from '../controllers';

const router = express.Router();
router.use('/user', usersRoute);
router.post('/sendEmail', sendEmail);
router.use(projectsRoute);
router.use(sectionsRoute);
router.use(tasksRoute);

export default router;
