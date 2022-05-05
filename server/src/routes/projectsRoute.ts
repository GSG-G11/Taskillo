import express from 'express';
import { getProjects } from '../controllers';

const projectsRoute = express.Router();

projectsRoute.get('/projects', getProjects);

export default projectsRoute;
