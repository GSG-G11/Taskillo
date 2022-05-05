import { Request, Response } from 'express';
import { addSectionQuery } from '../../database';

const addSectionController = (req: Request, res: Response) => {
  const { name } = req.body;
  const { projectId } = req.params;
  console.log(name, projectId);
  res.json({
    name,
    projectId,
  });
};

export default addSectionController;
