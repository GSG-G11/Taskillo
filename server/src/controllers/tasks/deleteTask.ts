import { Request, Response, NextFunction } from 'express';
import { deleteTaskQuery } from '../../database';

const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  try {
    await deleteTaskQuery(id);
    res.status(204).json({ message: 'The post deleted successfuly' });
  } catch (err) {
    next(err);
  }
};

export default deleteTask;
