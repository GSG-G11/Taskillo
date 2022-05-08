import { Request, Response } from 'express';
import { deleteTaskQuery } from '../../database';

const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteTaskQuery(id);
  res.status(204).json({ message: 'The post deleted successfuly' });
};

export default deleteTask;
