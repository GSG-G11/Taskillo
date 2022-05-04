import { Response } from 'express';
import getTasksQuery from '../../../database/ quieres';

const getTasks = async (req: any, res: Response) => { 
  const { id } = req.userInformation;
  try {
    const { rows, rowCount } = await getTasksQuery(id);
    if (!rowCount) return res.status(204).json({ msg: 'No Task Yet ' });
    return res.status(200).json({ data: rows, msg: 'Success' });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default getTasks;
