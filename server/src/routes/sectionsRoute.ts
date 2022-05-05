import { addSectionController } from '../controllers';
import { checkAuth } from '../middlewares';

const sectionsRoute = require('express').Router();

sectionsRoute.post('/section', addSectionController);

export default sectionsRoute;
