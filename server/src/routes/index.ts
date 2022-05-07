import projectsRoute from './projectsRoute';
import tasksRoute from './tasksRoute';
import userRoute from './userRoute';

const router = require('express').Router();

router.use('/user', userRoute);
router.use('/api/v1', projectsRoute);
router.use('/api/v1', tasksRoute);

export default router;
