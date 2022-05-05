import { Request, Response } from 'express';
import { addSectionQuery } from '../../database';

const addSectionController = (req: Request, res: Response) => {
  const { name, projectId } = req.body;
  console.log(name, projectId);
  res.json({
    name,
    projectId,
  });
};

export default addSectionController;
