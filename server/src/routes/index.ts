import express from 'express';
import projectsRoute from './projectsRoute';
import taskRoute from './taskRoute';
import userRoute from './userRoute';
import projectsRoute from './projectsRoute';
import taskRoute from './taskRoute';

const router = require('express').Router();

router.use('/user', userRoute);
router.use(projectsRoute);
router.use(taskRoute);

router.use(taskRoute);

export default router;
