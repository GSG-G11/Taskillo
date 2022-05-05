import { addSectionController, deleteSectionController, editSectionController } from '../controllers';
import { checkAuth } from '../middlewares';

const sectionsRoute = require('express').Router();

sectionsRoute.post('/section', addSectionController);
sectionsRoute.delete('/section/:id', deleteSectionController);
sectionsRoute.put('/section/:id', editSectionController);

export default sectionsRoute;
