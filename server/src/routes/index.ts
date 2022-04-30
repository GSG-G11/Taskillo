import express from 'express';
import projectsRoute from './projectsRoute';

const router = express.Router();

router.use(projectsRoute);

export default router;
