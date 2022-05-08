import {
  addSectionController,
  deleteSectionController,
  editSectionController,
  getProjectSectionsController,
} from '../controllers';

import { checkAuth } from '../middlewares';

const sectionsRoute = require('express').Router();

sectionsRoute.post('/section', addSectionController);
sectionsRoute.delete('/section/:id', deleteSectionController);
sectionsRoute.put('/section/:id', editSectionController);
sectionsRoute.get('/project/:id/sections', getProjectSectionsController);

export default sectionsRoute;
