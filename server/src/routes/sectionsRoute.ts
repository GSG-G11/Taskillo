import {
  addSection,
  deleteSection,
  editSection,
  getProjectSections,
} from '../controllers';

import { asyncMiddleware, checkAuth, checkMember } from '../middlewares';

const sectionsRoute = require('express').Router();

sectionsRoute.use(asyncMiddleware(checkAuth));
sectionsRoute.param('projectid', checkMember);
sectionsRoute.post('/project/:projectid/section', asyncMiddleware(addSection));
sectionsRoute.delete('/project/:projectid/section/:id', asyncMiddleware(deleteSection));
sectionsRoute.put('/project/:projectid/section/:id', asyncMiddleware(editSection));
sectionsRoute.get('/project/:projectid/sections', asyncMiddleware(getProjectSections));

export default sectionsRoute;
