import { signup, login, sendEmail, updateImage } from '../controllers';
import { asyncMiddleware, checkAuth } from '../middlewares';

const userRoute = require('express').Router();

userRoute.post('/signup', asyncMiddleware(signup));
userRoute.post('/login', asyncMiddleware(login));
userRoute.post('/sendEmail', asyncMiddleware(sendEmail));

userRoute.put('/profilePic', asyncMiddleware(checkAuth), asyncMiddleware(updateImage));

export default userRoute;
