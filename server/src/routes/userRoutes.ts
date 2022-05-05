import signup from '../controllers/projects';
import { login } from '../controllers/user';

const userRoutes = require('express').Router();

userRoutes.post('/signup', signup);

export default userRoutes;
