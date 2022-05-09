import { Request, Response } from 'express';
import { addSectionQuery } from '../../database';
import { addSectionSchema } from '../../utils';

const addSection = async (req: Request, res: Response) => {
  const { name, projectId } = req.body;
  await addSectionSchema.validateAsync(req.body);
  const { rows } = await addSectionQuery({ name, projectId });
  res.status(201).json({
    data: rows[0],
    message: 'Section added successfully!',
  });
};

export default addSection;
