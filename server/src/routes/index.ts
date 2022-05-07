import projectsRoute from './projectsRoute';
import taskRoute from './taskRoute';
import userRoute from './userRoute';

const router = require('express').Router();

router.use('/user', userRoute);
router.use('/api/v1', projectsRoute);
router.use('/api/v1', taskRoute);

export default router;
