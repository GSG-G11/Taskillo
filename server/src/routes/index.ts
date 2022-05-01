import express from 'express';
import projectRoute from './projectsRoute';

const router = express.Router();

router.use(projectRoute);

export default router;
