import projectsRoute from './projectsRoute';
import sectionsRoute from './sectionsRoute';
import taskRoute from './taskRoute';
import userRoute from './userRoute';

const router = require('express').Router();

router.use('/user', userRoute);
router.use(projectsRoute);
router.use(taskRoute);
router.use(sectionsRoute);

export default router;
