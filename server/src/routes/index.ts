import userRoutes from './userRoutes';

const router = require('express').Router();

router.use('/user', userRoutes);

export default router;
