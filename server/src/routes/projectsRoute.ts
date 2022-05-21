import {
  addProject,
  getProjects,
  deleteProject,
  editProject,
  getSpecificProject,
  getProjectMembers,
} from '../controllers';
import { asyncMiddleware, checkAuth, checkMember } from '../middlewares';

const projectsRoute = require('express').Router();

projectsRoute.use(asyncMiddleware(checkAuth));
projectsRoute.post('/project', asyncMiddleware(addProject));
projectsRoute.get('/projects', asyncMiddleware(getProjects));

projectsRoute.param('projectid', checkMember);
projectsRoute.delete('/project/:projectid', asyncMiddleware(deleteProject));
projectsRoute.put('/project/:projectid', asyncMiddleware(editProject));
projectsRoute.get('/project/:projectid', asyncMiddleware(getSpecificProject));
projectsRoute.get('/project/:projectid/members', asyncMiddleware(getProjectMembers));

export default projectsRoute;
