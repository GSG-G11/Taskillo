import express from 'express';
import projectsRoute from './projectsRoute';
import userRoutes from './userRoutes';

const router = require('express').Router();

router.use('/user', userRoutes);
router.use(projectsRoute);

router.post('/login', login);

export default router;
