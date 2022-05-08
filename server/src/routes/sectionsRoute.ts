import {
  addSection,
  deleteSection,
  editSectionController,
  getProjectSectionsController,
} from '../controllers';

import { asyncMiddleware, checkAuth } from '../middlewares';

const sectionsRoute = require('express').Router();

sectionsRoute.use(checkAuth);
sectionsRoute.post('/section', asyncMiddleware(addSection));
sectionsRoute.delete('/section/:id', asyncMiddleware(deleteSection));
sectionsRoute.put('/section/:id', editSectionController);
sectionsRoute.get('/project/:id/sections', getProjectSectionsController);

export default sectionsRoute;
