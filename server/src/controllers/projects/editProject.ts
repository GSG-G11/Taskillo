import { NextFunction, Response, Request } from 'express';
import { editProjectQuery } from '../../database';

const editProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const projectId = Number(id);
  try {
    const { rows } = await editProjectQuery(projectId, name, description);
    res.status(200).json({ data: rows[0], message: 'Project edited' });
  } catch (error) {
    next(error);
  }
};

export default editProject;
