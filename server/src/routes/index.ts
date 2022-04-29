const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
export default router;
