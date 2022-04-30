import express from 'express';
import { addProject } from '../controllers';

const router = express.Router();

router.post('/project', addProject);

export default router;
