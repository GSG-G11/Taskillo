import {
  addProject,
  getProjects,
  deleteProject,
  editProject,
  getSpecificProject,
} from '../controllers';

const projectsRoute = require('express').Router();

projectsRoute.post('/project', addProject);
projectsRoute.get('/projects', getProjects);
projectsRoute.delete('/project/:id', deleteProject);
projectsRoute.put('/project/:id', editProject);
projectsRoute.get('/project/:id', getSpecificProject);

export default projectsRoute;
