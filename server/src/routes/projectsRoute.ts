import {
  addProject,
  getProjects,
  deleteProject,
  editProject,
  getSpecificProject,
} from '../controllers';
import { asyncMiddleware, checkAuth } from '../middlewares';

const projectsRoute = require('express').Router();

projectsRoute.use(asyncMiddleware(checkAuth));
projectsRoute.post('/project', asyncMiddleware(addProject));
projectsRoute.get('/projects', asyncMiddleware(getProjects));
projectsRoute.delete('/project/:id', asyncMiddleware(deleteProject));
projectsRoute.put('/project/:id', asyncMiddleware(editProject));
projectsRoute.get('/project/:id', asyncMiddleware(getSpecificProject));

export default projectsRoute;
