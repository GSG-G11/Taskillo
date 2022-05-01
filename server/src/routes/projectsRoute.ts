import express from 'express';
import { editProjectController } from '../controllers';

const projectRoute = express.Router();

projectRoute.put('/project/:id', editProjectController);

export default projectRoute;
