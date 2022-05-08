import { Request, Response } from 'express';
import { editSectionQuery } from '../../database';
import { addSectionSchema } from '../../utils';

const editSection = async (req: Request, res: Response) => {
  const { name, projectId } = req.body;
  const { id } = req.params;
  await addSectionSchema.validateAsync(req.body);
  const { rows } = await editSectionQuery({ id, name, projectId });
  res.status(200).json({
    data: rows[0],
    message: 'Section Updated successfully',
  });
};

export default editSection;
