import express from 'express';
import projectRoute from './projectsRoute';
import userRoutes from './userRoutes';

const router = express.Router();

router.use('/user', userRoutes);

router.use(projectRoute);

export default router;
