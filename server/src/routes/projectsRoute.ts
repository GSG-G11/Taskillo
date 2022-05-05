import { addProject, getProjects, deleteProject } from '../controllers';

const projectsRoute = require('express').Router();

projectsRoute.post('/project', addProject);
projectsRoute.get('/projects', getProjects);
projectsRoute.delete('/project/:id', deleteProject);

export default projectsRoute;
