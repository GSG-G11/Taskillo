import projectsRoute from './projectsRoute';
import userRoutes from './userRoutes';
import projectsRoute from './projectsRoute';

const router = require('express').Router();

router.use('/user', userRoutes);
router.use(projectsRoute);

export default router;
