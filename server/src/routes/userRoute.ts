import { signup, login } from '../controllers';

const userRoute = require('express').Router();

userRoute.post('/signup', signup);
userRoute.post('/login', login);

export default userRoute;
