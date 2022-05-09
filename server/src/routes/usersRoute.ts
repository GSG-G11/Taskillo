import { signup, login, sendEmail } from '../controllers';
import { asyncMiddleware } from '../middlewares';

const userRoute = require('express').Router();

userRoute.post('/signup', asyncMiddleware(signup));
userRoute.post('/login', asyncMiddleware(login));
userRoute.post('/sendEmail', asyncMiddleware(sendEmail));

export default userRoute;
