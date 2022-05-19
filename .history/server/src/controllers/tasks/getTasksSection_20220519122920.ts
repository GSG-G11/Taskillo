import { Request, Response } from 'express';
import { getTasksSectionQuery } from '../../database';

const getTasksSection = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { rows, rowCount } = await getTasksSectionQuery(id);
  if (!rowCount) return res.status(204).json({ message: 'No Tasks Yet In This Section' });
  return res.status(200).json({ data: rows, message: 'Sucess' });
};

export default getTasksSection;
