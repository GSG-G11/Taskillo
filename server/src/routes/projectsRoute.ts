import {
  addProject,
  getProjects,
  deleteProject,
  editProject,
} from '../controllers';

const projectsRoute = require('express').Router();

projectsRoute.post('/project', addProject);
projectsRoute.get('/projects', getProjects);
projectsRoute.delete('/project/:id', deleteProject);
projectsRoute.put('/project/:id', editProject);

export default projectsRoute;
