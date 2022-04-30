import express from 'express';
import { deleteProject } from '../controllers';

const projectsRoute = express.Router();

projectsRoute.delete('/project/:id', deleteProject);

export default projectsRoute;
