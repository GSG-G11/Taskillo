import express from 'express';
import taskRoute from './taskRoute';
import projectsRoute from './projectsRoute';
import userRoutes from './userRoutes';

const router = require('express').Router();

router.use('/user', userRoutes);
router.use(projectsRoute);

router.use(taskRoute);

export default router;
