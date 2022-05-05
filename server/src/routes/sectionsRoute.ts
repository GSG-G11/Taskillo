import { addSectionController, deleteSectionController } from '../controllers';
import { checkAuth } from '../middlewares';

const sectionsRoute = require('express').Router();

sectionsRoute.post('/section', addSectionController);
sectionsRoute.delete('/section/:id', deleteSectionController);

export default sectionsRoute;
