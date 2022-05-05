import express from 'express';
import addProject from '../controllers';

const projectsRoute = express.Router();

projectsRoute.post('/project', addProject);

export default projectsRoute;
