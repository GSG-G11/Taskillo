const userRoutes = require('express').Router();
const signup = require('../controllers/projects');

userRoutes.post('signup', signup);
export default userRoutes;
