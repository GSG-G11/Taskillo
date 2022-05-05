import { signup } from '../controllers';

const userRoutes = require('express').Router();

userRoutes.post('/signup', signup);

export default userRoutes;
