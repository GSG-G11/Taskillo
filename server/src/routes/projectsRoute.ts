import {
  addProject,
  getProjects,
  deleteProject,
  editProject,
} from '../controllers';
import { checkAuth } from '../middlewares';

const projectsRoute = require('express').Router();

projectsRoute.post('/project', checkAuth, addProject);
projectsRoute.get('/projects', checkAuth, getProjects);
projectsRoute.delete('/project/:id', checkAuth, deleteProject);
projectsRoute.put('/project/:id', checkAuth, editProject);

export default projectsRoute;
