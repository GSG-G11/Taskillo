import { Response } from 'express';
import {
  addProjectQuery,
  addSectionQuery,
  addUserProjectsQuery,
} from '../../database';
import { addProjectSchema } from '../../utils';

const addProject = async (req: any, res: Response) => {
  const { id } = req.userInformation;
  const { name, description } = req.body;
  await addProjectSchema.validateAsync(req.body);
  const { rows } = await addProjectQuery(name, description);
  const projectId = rows[0].id;
  addUserProjectsQuery({ userId: id, projectId, role: 'owner' });
  const defaultSections = []
  addSectionQuery({ name: 'Todo', projectId });
  res.status(201).json({
    data: rows[0],
    message: 'The project has been added successfully',
  });
};

export default addProject;
