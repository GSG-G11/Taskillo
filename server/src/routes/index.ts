import express from 'express';
import projectsRoute from './projectsRoute';
import userRoute from './userRoute';

const router = require('express').Router();

router.use('/user', userRoute);
router.use(projectsRoute);

export default router;
