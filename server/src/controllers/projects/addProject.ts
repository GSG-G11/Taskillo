import { Response } from 'express';
import { addProjectQuery, addUserProjectsQuery } from '../../database';
import { addProjectSchema } from '../../utils';

const addProject = async (req: any, res: Response) => {
  const { id } = req.userInforamtion;
  const { name, description } = req.body;
  await addProjectSchema.validateAsync(req.body);
  const { rows } = await addProjectQuery(name, description);
  addUserProjectsQuery(id, rows[0].id, 'owner');
  res.status(201).json({
    data: rows[0],
    message: 'The project has been added successfully',
  });
};

export default addProject;
