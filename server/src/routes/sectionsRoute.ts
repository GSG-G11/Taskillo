import { addSectionController, deleteSectionController, editSectionController, getSectionsController } from '../controllers';
import { checkAuth } from '../middlewares';

const sectionsRoute = require('express').Router();

sectionsRoute.post('/section', addSectionController);
sectionsRoute.delete('/section/:id', deleteSectionController);
sectionsRoute.put('/section/:id', editSectionController);
sectionsRoute.get('/project/:id/sections', getSectionsController);

export default sectionsRoute;
