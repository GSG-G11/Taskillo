import { Response } from 'express';
import {
  addProjectQuery,
  addSectionQuery,
  addUserProjectsQuery,
} from '../../database';
import { addProjectSchema } from '../../utils';

const addProject = async (req: any, res: Response) => {
  const { id: userId } = req.userInformation;
  const { name, description } = req.body;
  await addProjectSchema.validateAsync(req.body);
  const { rows } = await addProjectQuery(name, description);
  const projectId = rows[0].id;
  const res = await addSectionQuery({ name: 'To Do', projectId });
  console.log(res);

  addUserProjectsQuery({ userId, projectId, role: 'owner' });

  // const defaultSections = ['To Do', 'In Progress', 'Done'];
  res.status(201).json({
    data: rows[0],
    message: 'The project has been added successfully',
  });
};

export default addProject;
