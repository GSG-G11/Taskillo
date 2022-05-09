import express from 'express';
import tasksRoute from './tasksRoute';
import projectsRoute from './projectsRoute';
import sectionsRoute from './sectionsRoute';
import userRoute from './usersRoute';

const router = express.Router();
router.use('/user', userRoute);
router.use(projectsRoute);
router.use(sectionsRoute);
router.use(tasksRoute);

export default router;
