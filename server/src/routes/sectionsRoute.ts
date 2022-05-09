import {
  addSection,
  deleteSection,
  editSection,
  getProjectSections,
} from '../controllers';

import { asyncMiddleware, checkAuth, checkMember } from '../middlewares';

const sectionsRoute = require('express').Router();

sectionsRoute.use(asyncMiddleware(checkAuth));
sectionsRoute.use(checkMember);
sectionsRoute.post('/section', asyncMiddleware(addSection));
sectionsRoute.delete('/section/:id', asyncMiddleware(deleteSection));
sectionsRoute.put('/section/:id', asyncMiddleware(editSection));
sectionsRoute.get('/project/:id/sections', asyncMiddleware(getProjectSections));

export default sectionsRoute;
