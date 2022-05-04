import express from 'express';
import userRoute from './userRoute';
import taskRoute from './taskRoute';

const router = require('express').Router();

router.use('/user', userRoute);

router.use(taskRoute);

export default router;
