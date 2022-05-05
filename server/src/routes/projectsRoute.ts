import express from 'express';
import { addProject, getProjects } from '../controllers';

const projectsRoute = express.Router();

projectsRoute.post('/project', addProject);
projectsRoute.get('/projects', getProjects);

export default projectsRoute;
