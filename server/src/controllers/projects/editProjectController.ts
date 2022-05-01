import { NextFunction, Response, Request } from 'express';
import { editProjectQuery } from '../../database';

const editProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const projectId = Number(id);
  try {
    const project = await editProjectQuery(projectId, name, description);
    res.status(200).json({ data: project, message: 'Project edited' });
  } catch (error) {
    next(error);
  }
};

export default editProjectController;
