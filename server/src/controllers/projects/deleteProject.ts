import { Response, Request, NextFunction } from 'express';
import { deleteProjectQuery } from '../../database';

const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    await deleteProjectQuery(+id);
    res
      .status(200)
      .json({ message: 'The project has been deleted successfuly' });
  } catch (error) {
    next(error);
  }
};

export default deleteProject;
