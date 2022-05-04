import { signup } from '../controllers/projects';

const userRoutes = require('express').Router();

userRoutes.post('/signup', signup);

export default userRoutes;
