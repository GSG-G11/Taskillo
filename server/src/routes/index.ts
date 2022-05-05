import express from 'express';
import taskRoute from './taskRoute';
import projectsRoute from './projectsRoute';
import userRoute from './userRoute';

const router = require('express').Router();

router.use('/user', userRoute);
router.use(projectsRoute);

router.use(taskRoute);

export default router;
