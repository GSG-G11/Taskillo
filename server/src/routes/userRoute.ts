import { signup, login, sendEmailController } from '../controllers';

const userRoute = require('express').Router();

userRoute.post('/signup', signup);
userRoute.post('/login', login);
userRoute.post('/sendEmail', sendEmailController);

export default userRoute;
