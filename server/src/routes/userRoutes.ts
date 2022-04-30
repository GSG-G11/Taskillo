import signup from '../controllers/projects';

const userRoutes = require('express').Router();

userRoutes.post('/signup', signup);

// userRoutes.post('/signup', () => {
//   console.log('hello');
// });
export default userRoutes;
