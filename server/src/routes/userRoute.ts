import { signup } from '../controllers/user';

const userRoute = require('express').Router();

userRoute.post('/signup', signup);

export default userRoute;
