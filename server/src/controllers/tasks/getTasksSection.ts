import { Request, Response } from 'express';
import getTasksSectionQuery from '../../database/ quieres';

const getTasksSection = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { rows, rowCount } = await getTasksSectionQuery(id);
    if (!rowCount) return res.status(204).json({ msg: 'No Tasks Yet In This Section' });
    return res.json(200).json({ data: rows, msg: 'Sucess' });
  } catch (error) {
    return res.status(500).json({ msg: 'SERVER ERROR' });
  }
};

export default getTasksSection;
