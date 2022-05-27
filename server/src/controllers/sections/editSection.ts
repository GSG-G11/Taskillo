import { Request, Response } from 'express';
import { editSectionQuery } from '../../database';
import { addSectionSchema } from '../../utils';

const editSection = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { id: sectionId, projectid } = req.params;
  await addSectionSchema.validateAsync({ name, projectId: projectid });
  const { rows } = await editSectionQuery({
    id: sectionId,
    name,
    projectId: projectid,
  });
  res.status(200).json({
    data: rows[0],
    message: 'Section Updated successfully',
  });
};

export default editSection;
