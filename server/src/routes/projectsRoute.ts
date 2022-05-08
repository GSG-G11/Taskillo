import {
  addProject,
  getProjects,
  deleteProject,
  editProject,
  getSpecificProject,
} from '../controllers';
import { checkAuth } from '../middlewares';

const projectsRoute = require('express').Router();

projectsRoute.use(checkAuth);
projectsRoute.post('/project', addProject);
projectsRoute.get('/projects', getProjects);
projectsRoute.delete('/project/:id', deleteProject);
projectsRoute.put('/project/:id', editProject);
projectsRoute.get('/project/:id', getSpecificProject);

export default projectsRoute;
