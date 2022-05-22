import { Request, Response } from 'express';
import { addSectionQuery } from '../../database';
import { addSectionSchema } from '../../utils';

const addSection = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { projectid } = req.params;
  const projectId = +projectid;
  await addSectionSchema.validateAsync({ name, projectId });
  const { rows } = await addSectionQuery({ name, projectId });
  res.status(201).json({
    data: rows[0],
    message: 'Section added successfully!',
  });
};

export default addSection;
